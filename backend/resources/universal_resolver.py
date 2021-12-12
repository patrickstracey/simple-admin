from database.database import pull_collection_unformatted


def resolve_request(obj, info):
    collection_name = info[0]
    result = { "collection": [], "count": 0}
    try:
        db_result = pull_collection_unformatted(collection_name)
        result["count"] = len(db_result)
        result["collection"] = db_result

    except Exception as error: 
        result["errors"] = [error]
    return result