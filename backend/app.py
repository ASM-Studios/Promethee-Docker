#!/usr/bin/env python3
from flask import Flask
from flask_cors import CORS
from backend.routes import routes  # Use absolute import for routes

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

app.register_blueprint(routes)  # Register the master blueprint

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
