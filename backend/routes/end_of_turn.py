from flask import Blueprint, request, jsonify
from flask_cors import CORS
from backend.lobby.LobbyManager import lobby_manager

EOT_routes = Blueprint('EOT_routes', __name__)
CORS(EOT_routes)  # Enable CORS for this sub-blueprint

@EOT_routes.route('/end_of_turn', methods=['PUT'])
def end_of_turn():
    data = request.get_json()
    lobbyId = data.get('lobbyId')
    for lobby in lobby_manager.get_lobbies():
        if lobby.getUUID() == lobbyId:
            break
    else:
        return jsonify({"error": "Lobby not found"}), 400
    player = lobby.getNext()
    return jsonify({
        "username": player.getName()
    })
