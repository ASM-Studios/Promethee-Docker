from flask import Blueprint, request, jsonify
from flask_cors import CORS
from backend.lobby.LobbyManager import lobby_manager

update_routes = Blueprint('update_routes', __name__)
CORS(update_routes)  # Enable CORS for this sub-blueprint

@update_routes.route('/update', methods=['PUT'])
def update():
    data = request.get_json()
    lobbyId = data.get('lobbyId')
    for lobby in lobby_manager.get_lobbies():
        if lobby.getUUID() == lobbyId:
            break
    else:
        return jsonify({"error": "Lobby not found"}), 400
    player = lobby.getCurrent()
    return jsonify({
        "players": lobby.getPlayers(),
        "currentPlayer": player.getName()
    })
