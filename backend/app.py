#!/usr/bin/env python3
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    header['Access-Control-Allow-Methods'] = 'OPTIONS, GET, POST, PUT, DELETE'
    return response

app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
