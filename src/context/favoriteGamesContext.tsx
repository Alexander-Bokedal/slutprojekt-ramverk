'use client'

import { createContext, useContext, useReducer } from "react";
import { IgdbGame } from "@/types/types";


export type GameState = IgdbGame[];

type GameAction =
	| { type: "ADD_GAME"; payload: IgdbGame }
	| { type: "REMOVE_GAME"; payload: { id: string } }
	| { type: "UPDATE_INFO"; payload: { id: string; info: { hours: number, rating: number } } };

type GameContextType = {
	state: GameState;
	dispatch: React.Dispatch<GameAction>;
};

const initialState: GameState = [];

function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case "ADD_GAME":
			return [...state, action.payload];
		case "REMOVE_GAME":
			return state.filter(game => game.id !== action.payload.id);
		case "UPDATE_INFO":
			return state.map(game =>
				game.id === action.payload.id
					? { ...game, info: action.payload.info }
					: game
			);
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
