from flask import Blueprint
from .play_card_routes import play_card_routes
from .question_routes import question_routes
from .enter_lobby_by_id_routes import enter_lobby_by_id_routes
from .draw_routes import draw_routes
from .update_routes import update_routes
from .EOT_routes import EOT_routes
from flask_cors import CORS

routes = Blueprint('routes', __name__)
CORS(routes)  # Enable CORS for the master blueprint

routes.register_blueprint(play_card_routes)
routes.register_blueprint(question_routes)
routes.register_blueprint(enter_lobby_by_id_routes)
routes.register_blueprint(draw_routes)
routes.register_blueprint(update_routes)
routes.register_blueprint(EOT_routes)

@routes.route('/ping', methods=['GET'])
def ping():
    return '', 200
