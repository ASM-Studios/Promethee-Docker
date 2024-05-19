import axios from 'axios';

// @ts-ignore
const edt = "127.0.0.1";
// @ts-ignore
const port = "5000";

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
