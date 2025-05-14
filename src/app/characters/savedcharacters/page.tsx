'use client'
import { IgdbCharacter } from "@/types/types"
import { useCharacterContext } from "@/context/favoriteCharactersContext"
import { AlwaysShowMediumImage } from "@/components/GameImage"
import Image from "next/image"
import UpdateCharacterModal from "@/components/UpdateCharacterModal"
import { useState } from "react"
import CharacterInfoBar from "@/components/CharacterInfoBar"
import Card from "@/components/Card"

const SavedCharacters = () => {
	const { state, dispatch } = useCharacterContext();

	const [character, setCharacter] = useState<IgdbCharacter | null>(null)
	console.log(state)
	const characters = state as IgdbCharacter[]
	return (
		<>

			<CharacterInfoBar />
			<main className="flex justify-center">

				<ul className="flex flex-col gap-4 items-center md:grid grid-cols-2 lg:grid-cols-3 ">
					{characters.map((character: IgdbCharacter) => (
						<li
							key={character.id}
						>
							<Card>
								{character.mug_shot?.image_id ? (
									<AlwaysShowMediumImage id={character.mug_shot.image_id} />
								) : character.games?.[0]?.cover?.image_id ? (
									<AlwaysShowMediumImage id={character.games[0].cover.image_id} />
								) : (
									<div className="flex items-center justify-center min-w-[120px] min-h-[120px] border border-blue-400">
										<Image

											src='/fallback.png'
											alt="Fallback image"
											width={120}

											height={120}
											className=" flex items-center justify-center min-w-[90px] min-h-[128px] md:min-w-[264px] md:min-h-[374px] bg-gray-600"
										/>
									</div>
								)}

								<div className="p-4">
									<h2 className="text-lg font-semibold">{character.name}</h2>
								</div>

							</Card>

							<div className="mt-2 bg-white border border-gray-300 rounded-xl shadow-md p-4 w-full max-w-md">
								<p className="text-gray-800 text-lg font-semibold mb-2">Smash or pass?</p>
								<p className="text-gray-600 text-base mb-4 italic">
									{character.choice ? character.choice : 'Choose wisely'}
								</p>
								<button
									onClick={() => setCharacter(character)}
									className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
								>
									Edit
								</button>
							</div>
						</li>
					))}
				</ul>
			</main>
			{character && (
				<UpdateCharacterModal
					character={character}
					handleUpdate={(id, choice) => {
						dispatch({ type: 'UPDATE_CHARACTER', payload: { ...character, id, choice } });
					}}
					onClose={() => setCharacter(null)}
				/>
			)}
		</>
	)
}


export default SavedCharacters
