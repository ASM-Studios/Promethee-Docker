from flask import Blueprint
from flask_cors import CORS
from .draw import draw_routes
from .enter_lobby_by_id import enter_lobby_by_id_routes
from .play_card import play_card_routes
from .question import question_routes
from .end_of_turn import EOT_routes
from .update import update_routes

__all__ = [draw_routes, enter_lobby_by_id_routes, play_card_routes, question_routes, EOT_routes, update_routes]

routes = Blueprint('routes', __name__)
CORS(routes)  # Enable CORS for the master blueprint

# Register all the sub-blueprints
routes.register_blueprint(draw_routes)
routes.register_blueprint(enter_lobby_by_id_routes)
routes.register_blueprint(play_card_routes)
routes.register_blueprint(question_routes)
routes.register_blueprint(EOT_routes)
routes.register_blueprint(update_routes)

@routes.route('/ping', methods=['GET'])
def ping():
    return '', 200
