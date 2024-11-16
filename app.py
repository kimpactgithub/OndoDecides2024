# app.py
from flask import Flask
from config import CREDENTIALS_FILE, GOOGLE_SHEET_URL
from routes.api import api
from flask_cors import CORS

# app = Flask(__name__)
# cors = CORS(app)

def create_app():
    app = Flask(__name__)
    app.config.from_object('config')
    app.register_blueprint(api)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
