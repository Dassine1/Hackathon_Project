import os

from dotenv import load_dotenv
from flask import Flask, render_template, Blueprint
from flask_cors import CORS




if __name__ == '__main__':
    app = Flask(__name__)
    # load_dotenv()
    # app.secret_key = os.getenv("SECRET_KEY")

    CORS(app)
    api_bp = Blueprint("api", __name__)

    api_bp.route("/", methods=["GET"])


    def search():
        return "meow"


    app.register_blueprint(api_bp, url_prefix="/api")
    # return handle_get("", {}, {})

    app.run(host='0.0.0.0', port=5000, debug=True)