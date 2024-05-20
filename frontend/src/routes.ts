import axios from 'axios';

const edt = process.env.REACT_APP_BACKEND_IP;
const port = process.env.REACT_APP_BACKEND_PORT;

const endpoint = `http://${edt}:${port}`;

console.error(edt);
console.error(port);
console.error(endpoint);

const ping = endpoint + '/ping';
const enterLobbyById = endpoint + '/enter_lobby_by_id';
const playCard = endpoint + '/play_card';
const update = endpoint + '/update';
const draw = endpoint + '/draw';
const questionUrl = endpoint + '/question';
const endOfTurn = endpoint + '/end_of_turn';

const instance = axios.create({
    baseURL: endpoint,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export {
    instance,
    endpoint,
    ping,
    enterLobbyById,
    playCard,
    update,
    draw,
    questionUrl,
    endOfTurn,
};
