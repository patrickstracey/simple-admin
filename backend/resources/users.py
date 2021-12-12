from flask_restful import Resource
from database.database import pull_collection_unformatted


def resolve_users(obj, info):
    payload = { "users": [], "count": 0}
    try:
        users = pull_collection_unformatted('users')
        payload["count"] = len(users)
        payload["users"] = users

    except Exception as error: 
        payload["errors"] = [error]
    return payload