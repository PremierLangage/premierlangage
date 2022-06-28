"""
Author: Clément Gaudet

Script to index a filesystem from scratch into elasticsearch
This creates the indexes and indexes all files in the folder indicated as root

2 indexes are used : one for files, one for file contents (1 document per line)
"""

import os, time
from datetime import datetime
from elasticsearch import Elasticsearch, helpers
	
#####################

# Variables to change according to situation
domain = 'http://localhost'
port = 55000
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
    for dirpath, _, filenames in os.walk(path):
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