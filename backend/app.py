#!/usr/bin/env python3
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
