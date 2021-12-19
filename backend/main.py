from flask import Flask, request, jsonify
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from flask_cors import CORS
from resources.universal_resolver import resolve_request
from database.database import schema

app = Flask(__name__)
CORS(app)

query = ObjectType("Query")

for data_type in schema:
    query.set_field(data_type, resolve_request)

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