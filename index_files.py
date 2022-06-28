# import Datetime for the document's timestamp
from datetime import datetime

# import glob and os
import os, hashlib

# use the elasticsearch client's helpers class for _bulk API
from elasticsearch import Elasticsearch, helpers
	
# declare a client instance of the Python Elasticsearch library
client = Elasticsearch("http://localhost:55000")

def get_file_content(filepath):
    with open(filepath, 'r', errors='ignore') as file:
        result = file.read()
    return result

def gen_data(path):
    for dirpath, _, filenames in os.walk(path):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            stats = os.stat(filepath)
            last_modified = datetime.fromtimestamp(stats.st_mtime)

            with open(filepath, 'r', errors='ignore') as file:
                for n, line in enumerate(file):
                    if line.strip():
                        yield {
                            '_index': 'files',
                            'filepath': filepath,
                            'last-modified': last_modified,
                            'line-number': n + 1,
                            'data': line.strip()
                        }

            
if client.indices.exists(index='files'):
    client.indices.delete(index='files')
client.indices.create(index='files')

# make the bulk call using 'actions' and get a response
resp = helpers.bulk(client, gen_data('home/'))
print ("\nhelpers.bulk() RESPONSE:", resp)
print ("RESPONSE TYPE:", type(resp))
