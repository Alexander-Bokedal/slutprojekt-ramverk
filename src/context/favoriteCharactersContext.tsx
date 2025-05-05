'use client'
import { IgdbCharacter } from '@/hooks/useFetchHook';
import React, {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	Dispatch
} from 'react';


type CharacterState = {
	characters: IgdbCharacter[]
}

type CharacterAction =
	| { type: 'ADD_CHARACTER'; payload: IgdbCharacter }
	| { type: 'REMOVE_CHARACTER'; payload: { id: string } }
	| { type: 'UPDATE_CHARACTER'; payload: IgdbCharacter };

const initialState: CharacterState = {
	characters: [],
};

function characterReducer(state: CharacterState, action: CharacterAction): CharacterState {
	switch (action.type) {
		case 'ADD_CHARACTER':
			return { characters: [...state.characters, action.payload] };
		case 'REMOVE_CHARACTER':
			return {
				characters: state.characters.filter((char) => char.id !== action.payload.id),
			};
		case 'UPDATE_CHARACTER':
			return {
				characters: state.characters.map((char) =>
					char.id === action.payload.id ? action.payload : char
				),
			};
		default:
			throw new Error(`Unhandled action type: `);
	}
}


export const useCharacterContext = (): CharacterContextType => {
	const context = useContext(CharacterContext);
	if (context === null) {
		throw new Error(
			'useCharacterContext must be used within a CharacterContextProvider'
		);
	}
	return context;
};
type CharacterContextType = {
	state: CharacterState;
	dispatch: Dispatch<CharacterAction>;
}

const CharacterContext = createContext<CharacterContextType | null>(
	null
)

type CharacterProviderProps = {
	children: ReactNode;
}

export const CharacterContextProvider: React.FC<CharacterProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(characterReducer, initialState);

	return (
		<CharacterContext.Provider value={{ state, dispatch }}>
			{children}
		</CharacterContext.Provider>
	);
};

