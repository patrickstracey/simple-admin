import os
from pymongo import MongoClient


client = MongoClient(os.environ.get('MONGO_URI_PROD'))
db = client['mgov']

schema = ["acls", "bills", "chambers", "classroom", "discussions", "flows", "parties", "presets", "users"]

def pull_collection_unformatted(collection):
    result = []
    allItems = db[collection].find({})
    for item in allItems:
        result.append(item)
    return result