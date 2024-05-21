import random
from flask import Blueprint, jsonify, request
from flask_cors import CORS
from backend.lobby import questions
from backend.lobby.LobbyManager import lobby_manager

question_routes = Blueprint('questions', __name__)
CORS(question_routes)  # Enable CORS for this sub-blueprint

@question_routes.route('/question', methods=['PUT'])
def choose_question():
    data = request.get_json()
    lobby_id = data.get('lobbyId')
    username = data.get('username')

    for lobby in lobby_manager.get_lobbies():
        if lobby.getUUID() == lobby_id:
            player = lobby.getPlayer(username)
            if player:
                player.setAsGamble(True)

    question_id = random.randint(0, len(questions) - 1)
    return jsonify({
        "title": questions[question_id]["question"],
        "expected": questions[question_id]["expected"],
        "min": questions[question_id]["min"],
        "max": questions[question_id]["max"],
        "tolerance": questions[question_id]["tolerance"]
    }), 200
