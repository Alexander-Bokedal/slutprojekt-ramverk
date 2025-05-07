'use client'
import { IgdbCharacter } from "@/types/types"
import { useCharacterContext } from "@/context/favoriteCharactersContext"
import { AlwaysShowMediumImage } from "@/components/GameImage"
import Image from "next/image"
import UpdateCharacterModal from "@/components/UpdateCharacterModal"
import { useState } from "react"

const SavedCharacters = () => {
	const { state, dispatch } = useCharacterContext();

	const [character, setCharacter] = useState<IgdbCharacter | null>(null)
	console.log(state)
	const characters = state as IgdbCharacter[]
	return (
		<>

			<main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
				{characters.map((character: IgdbCharacter) => (
					<div
						key={character.id}
						className="transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
					>
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


						<p> Smash or pass? </p>
						{character.choice ? character.choice : 'choose wisely'}
						<button
							onClick={() => setCharacter(character)}
							className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
						>
							Edit
						</button>
					</div>
				))}
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
