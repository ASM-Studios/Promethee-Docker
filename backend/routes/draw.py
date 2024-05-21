from flask import Blueprint, jsonify
from flask_cors import CORS
from ..lobby.Card import Card

draw_routes = Blueprint('draw', __name__)
CORS(draw_routes)  # Enable CORS for this sub-blueprint

@draw_routes.route('/draw', methods=['GET'])
def draw_card():
    value = Card.generateRandom()
    return jsonify({"value": value}), 200
