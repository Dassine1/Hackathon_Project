import os
import ssl

from dotenv import load_dotenv
from flask import Flask, render_template
from flask_cors import CORS

if __name__ == '__main__':
    app = Flask(__name__)
    load_dotenv()
    app.secret_key = os.getenv("SECRET_KEY")
    DB_NAME = os.getenv("DATABASE_URL")

    CORS(app)

    app.register_blueprint(home_bp, url_prefix="/")

    @app.errorhandler(404)
    def page_not_found(error):
        render_template("page-not-found.html", error=error), 404