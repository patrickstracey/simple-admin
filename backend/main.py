from flask import Flask
from flask_restful import Api
from resources.universalResource import universalEndpoint

app = Flask(__name__)
api = Api(app)


api.add_resource(universalEndpoint, '/<string:collection>')