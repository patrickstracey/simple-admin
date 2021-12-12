from flask_restful import Resource
from database.database import pullCollection


class universalEndpoint(Resource):
    def get(self, collection):
        result = pullCollection(collection)
        return result