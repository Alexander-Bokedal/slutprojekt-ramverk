
'use client'

import { createContext, useContext, useReducer } from "react";

export type Game = {
	id: string;
	name: string;
	url: string;
	rating?: number;
};

type GameState = {
	games: Game[];
};

type GameAction =
	| { type: "ADD_GAME"; payload: Game }
	| { type: "REMOVE_GAME"; payload: { id: string } }
	| { type: "UPDATE_RATING"; payload: { id: string; rating: number } };
type GameContextType = {
	state: GameState;
	dispatch: React.Dispatch<GameAction>;
};

const initialState: GameState = {
	games: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case "ADD_GAME":
			return { games: [...state.games, action.payload] };
		case "REMOVE_GAME":
			return { games: state.games.filter(game => game.id !== action.payload.id) };
		case "UPDATE_RATING":
			return {
				games: state.games.map(game =>
					game.id === action.payload.id
						? { ...game, rating: action.payload.rating }
						: game
				),
			};
		default:
			throw new Error(`Unhandled action type: `);
	}
}

const GameContext = createContext<GameContextType | null>(null);

export const useGameContext = (): GameContextType => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error("useGameContext must be used within a GameContextProvider");
	}
	return context;
};

type GameProviderProps = {
	children: React.ReactNode;
};

export function GameContextProvider({ children }: Readonly<GameProviderProps>) {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
}
