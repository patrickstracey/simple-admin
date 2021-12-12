import os
from pymongo import MongoClient
from flask import jsonify


client = MongoClient(os.environ.get('MONGO_URI_PROD'))
db = client['mgov']

def pullCollection(collection):
    result = {'count': 0, 'collection': []}
    allItems = db[collection].find({})
    for item in allItems:
        result['collection'].append(item)
        result['count'] += 1
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.status_code = 200
    return response

def pullCollectionUnformatted(collection):
    result = []
    allItems = db[collection].find({})
    for item in allItems:
        result.append(item)
    return result