from flask import Blueprint

from core.handle_requests import handle_get

api_bp = Blueprint("api", __name__)

api_bp.route("/search", methods=["GET"])
def search():
    return "meow"
    # return handle_get("", {}, {})