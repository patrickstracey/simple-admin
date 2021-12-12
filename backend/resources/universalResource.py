from flask_restful import Resource
from database.database import pullCollection


class UniversalEndpoint(Resource):
    def get(self, collection):
        result = pullCollection(collection)
        return result

class GoodbyWorld(Resource):
    def get(self):
        return {'goodbye': 'world'}