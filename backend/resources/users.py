from flask_restful import Resource
from database.database import pullCollectionUnformatted
from models.user import User


def resolve_users(obj, info):
    payload = { "users": [], "count": 0}
    try:
        users = pullCollectionUnformatted('users')
        refined_users = []
        for i in users:
            refined_user = {
                "_id": i["_id"],
                "username": i["username"],
                "email": i["email"]
            }
            refined_users.append(refined_user)
            payload["count"] += 1
        payload["users"] = refined_users

    except Exception as error: 
        payload["errors"] = [error]
    return payload