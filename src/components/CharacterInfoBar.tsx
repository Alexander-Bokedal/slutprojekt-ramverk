
'use client'

import { IgdbCharacter } from "@/types/types";
import { useCharacterContext } from "@/context/favoriteCharactersContext";
const CharacterInfoBar = () => {

	const { state } = useCharacterContext();
	const characters = state as IgdbCharacter[]

	const choiceCounts = characters.reduce(
		(acc, character) => {
			const choice = character.choice;
			if (choice === "smash") acc.smash += 1;
			else if (choice === "pass") acc.pass += 1;
			return acc;
		},
		{ smash: 0, pass: 0 }
	);

	return (
		<div className="w-full flex flex-col gap-5  md:w-1/2 justify-self-center m-2 rounded-2xl justify-items-center items-center justify-evenly px-4 py-2 bg-gray-100 border-t border-gray-300">
			<p> Amount of characters: {characters.length} </p>
			<div className="flex flex-col md:flex-row items-center text-center justify-evenly w-full">
				<p> You wanna smash {choiceCounts.smash} characters </p>
				<p> You wanna pass {choiceCounts.pass} characters </p>
			</div>
			<p> {choiceCounts.smash > choiceCounts.pass ? 'Seek help you sicko' : choiceCounts.pass > choiceCounts.smash ? 'What? You want a medal?' : 'I dont know what to believe'} </p>
		</div>
	);
};

export default CharacterInfoBar;
