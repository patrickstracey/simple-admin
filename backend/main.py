from flask import Flask, request, jsonify
from flask_restful import Api
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from flask_cors import CORS
from resources.universal_resource import universal_endpoint
from resources.universal_resolver import resolve_request

app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(universal_endpoint, '/<string:collection>')

query = ObjectType("Query")

query.set_field("acls", resolve_request)
query.set_field("bills", resolve_request)
query.set_field("chambers", resolve_request)
query.set_field("classroom", resolve_request)
query.set_field("discussions", resolve_request)
query.set_field("users", resolve_request)

type_defs = load_schema_from_path("database/schema")
schema = make_executable_schema(
    type_defs, query, snake_case_fallback_resolvers
)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()

    success, result = graphql_sync(
        schema,
        data,
        context_value=request,
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code