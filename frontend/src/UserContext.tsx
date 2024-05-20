import { createContext } from 'react';

interface Player {
    username: string;
    life: number;
    asGamble: boolean;
}

type UserContextType = {
    username: string;
    setUsername: (value: string) => void;
    lobbyId: string;
    setLobbyId: (value: string) => void;
    players: Player[]; // Updated players type
    setPlayers: (value: Player[]) => void; // Updated setPlayers type
    lobbyCreator: string;
    setLobbyCreator: (value: string) => void;
    cards: string[];
    setCards: (value: string[]) => void;
};

const UserContext = createContext<UserContextType>({
    username: '',
    setUsername: () => {},
    lobbyId: '',
    setLobbyId: () => {},
    players: [],
    setPlayers: () => {},
    lobbyCreator: '',
    setLobbyCreator: () => {},
    cards: [],
    setCards: () => {},
});

export default UserContext;
