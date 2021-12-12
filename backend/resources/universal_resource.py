from flask_restful import Resource
from database.database import pull_collection


class universal_endpoint(Resource):
    def get(self, collection):
        result = pull_collection(collection)
        return result