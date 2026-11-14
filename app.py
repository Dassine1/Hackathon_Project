import os

from dotenv import load_dotenv
from flask import Flask, render_template
from flask_cors import CORS

from blueprints.api import api_bp

if __name__ == '__main__':
    app = Flask(__name__)
    load_dotenv()
    app.secret_key = os.getenv("SECRET_KEY")
    DB_NAME = os.getenv("DATABASE_URL")

    CORS(app)

    app.register_blueprint(api_bp, url_prefix="/api/v1")

    @app.errorhandler(404)
    def page_not_found(error):
        render_template("page-not-found.html", error=error), 404

    app.run(host='0.0.0.0', port=5000)