"""
Author: Clément Gaudet

Script to index a filesystem from scratch into elasticsearch
This creates the indexes and indexes all files in the folder indicated as root

2 indexes are used : one for files, one for file contents (1 document per line)
"""

import os, time, sys
from re import M
from datetime import datetime
from elasticsearch import Elasticsearch, helpers, exceptions
	
#####################

# Variables to change according to situation
domain = 'http://localhost'
port = 9200
index_files = 'files'
index_contents = 'contents'
root = 'home/'

#####################

files_mappings =  {
    'properties': {
        'filepath': {
            'type': 'keyword'
        },
        'last-modified': {
            'type': 'date'
        }
    }
}

contents_mappings = {
    'properties': {
        'data': {
            'type': 'text'
        },
        'filepath': {
            'type': 'keyword'
        },
        'line-number': {
            'type': 'long'
        }
    }
}

def gen_data(path):
    exclude = ['.git']

    for dirpath, dirs, filenames in os.walk(path, topdown=True):
        dirs[:] = [dir for dir in dirs if dir not in exclude]

        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            relpath = os.path.relpath(filepath, root)

            timestamp = os.path.getmtime(filepath)
            last_modified = datetime.fromtimestamp(timestamp)
            print(f'Indexing {filepath}... ', end='')

             # Add file
            yield {
                '_index': index_files,
                'filepath': relpath,
                'last-modified': last_modified
            }

            with open(filepath, 'r', errors='ignore') as file:
                # Add lines
                for n, line in enumerate(file):
                    if line.strip():
                        yield {
                            '_index': index_contents,
                            'filepath': relpath,
                            'line-number': n + 1,
                            'data': line.strip()
                        }
            
            print('OK')

if __name__ == '__main__':
    # declare a client instance of the Python Elasticsearch library
    host = domain + ':' + str(port)
    es_client = Elasticsearch(host)

    # CHeck connection
    try:
        es_client.info()
    except exceptions.ConnectionError as err:
        print(f'Connection to {host} impossible: invalid host or offline cluster')
        print('\nDetails:\n' + str(err))
        sys.exit(1)

    if es_client.indices.exists(index=index_files):
        print(f'index {index_files} already exists, deleting and recreating...')
        es_client.indices.delete(index=index_files)
        es_client.indices.create(index=index_files, mappings=files_mappings)

    if es_client.indices.exists(index=index_contents):
        print(f'index {index_contents} already exists, deleting and recreating...')
        es_client.indices.delete(index=index_contents)
        es_client.indices.create(index=index_contents, mappings=contents_mappings)

    start = time.time()

    n, blah = helpers.bulk(es_client, gen_data(root))

    elapsed_time = time.time() - start
    print(f'Indexation of {root} finished in {elapsed_time} s')
    print(f'Sucessfully indexed {n} lines')