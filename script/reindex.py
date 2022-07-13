"""
Author: Clément Gaudet

Script to update the indexing of a filesystem into elasticsearch.
This assumes an initial indexing was already done at least once.

This checks for updated, deleted and created files since last indexing/reindexing and
updates only what is necessary.
"""

import os, time, sys
from datetime import datetime
from elasticsearch import Elasticsearch, exceptions

#####################

domain = 'http://localhost'
port = 9200
index_files = 'files'
index_contents = 'contents'
root = 'home/'

#####################

def es_iterate_all_documents(es, index, pagesize=250, scroll_timeout="2s", **kwargs):
    """
    Helper to iterate ALL values from a single index
    Yields all the documents.
    """
    is_first = True
    while True:
        # Scroll next
        if is_first: # Initialize scroll
            result = es.search(index=index, scroll=scroll_timeout, **kwargs, size=pagesize)
            is_first = False
        else:
            result = es.scroll(scroll_id= scroll_id, scroll=scroll_timeout)
        scroll_id = result["_scroll_id"]
        hits = result["hits"]["hits"]
        # Stop after no more docs
        if not hits:
            break
        # Yield each entry
        yield from (hit['_source'] for hit in hits)

def es_delete_file(es, filepath):
    """Deletes a file and its content from the cluster"""
    query = {'term': { 'filepath': filepath }}
    es.delete_by_query(index=index_files, query=query)
    es.delete_by_query(index=index_contents, query=query)

def es_index_file(es, filepath, last_modified=None):
    """Index a file and its content in a cluster"""
    fullpath = os.path.join(root, filepath)
    if last_modified is None:
        timestamp = os.path.getmtime(fullpath)
        last_modified = datetime.fromtimestamp(timestamp)
    
    es.index(index=index_files, document={'filepath': filepath, 'last-modified': last_modified})
    with open(fullpath, 'r', errors='ignore') as file:
        for n, line in enumerate(file):
            if line.strip():
                es.index(index=index_contents, document={
                    'filepath': filepath,
                    'line-number': n + 1,
                    'data': line.strip()
                })


if __name__ == '__main__':
    host = domain + ':' + str(port)
    es_client = Elasticsearch(host)

    try:
        es_client.info()
    except exceptions.ConnectionError as err:
        print(f'Connection to {host} impossible: invalid host or offline cluster')
        print('\nDetails:\n' + str(err))
        sys.exit(1)

    start = time.time()

    # Obtaining list of files on filesystem
    files = {}

    exclude = ['.git']
    for dirpath, dirs, filenames in os.walk(root, topdown=True):
        dirs[:] = [dir for dir in dirs if dir not in exclude]
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            filepath = os.path.relpath(filepath, root)
            files[filepath] = False

    # Loop through files on cluster and delete/reindex if necessary
    print('Checking state of indexed files...')
    for entry in es_iterate_all_documents(es_client, index_files):
        filepath = entry['filepath']

        if filepath in files:
            files[filepath] = True
            
            timestamp = os.path.getmtime(os.path.join(root, filepath))
            last_modified = datetime.fromtimestamp(timestamp)

            # File has been modified since last indexing, reindex
            if last_modified > datetime.fromisoformat(entry['last-modified']):
                es_delete_file(es_client, filepath)
                es_index_file(es_client, filepath, last_modified=last_modified)
                print(f'{filepath}: has changed... REINDEXED')
            
        else:
            # File doesn't exist anymore, remove from index
            es_delete_file(es_client, filepath)
            print(f'{filepath}: does not exist anymore... DELETED')
    
    # Index new files
    print('Adding new files...')
    for filepath in files:
        if not files[filepath]:
            es_index_file(es_client, filepath)
            print(f'{filepath}: is new... INDEXED')
    
    elapsed_time = time.time() - start
    print(f'Reindexing sucessfully complete in {elapsed_time} s')