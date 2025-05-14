'use client'
import Link from "next/link";
import { useFetchHook } from "@/hooks/useFetchHook"
import { IgdbCharacter } from "@/types/types";
import { SmallCharacterImage, SmallImage } from "./GameImage";
import { useCategoryContext } from "@/context/categoryContext";
import { useEffect } from "react";
import { useCharacterContext } from "@/context/favoriteCharactersContext";
import FavoriteButton from "./FavoriteButtonStar";
import Spinner from "./Spinner";
import Card from "./Card";
import Image from "next/image";
const ShowCharactersResult = () => {
	const { dispatch, state } = useCharacterContext();
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

	const handleAdd = (character: IgdbCharacter) => {
		dispatch({ type: 'ADD_CHARACTER', payload: character });
	};

	const handleRemove = (character: IgdbCharacter) => {
		dispatch({ type: 'REMOVE_CHARACTER', payload: { id: character.id } });
	};
	useEffect(() => {
		console.log(state)
	}, [state])
	if (category !== 'Characters') return null
	console.log(data)
	if (loading) {
		return <Spinner />
	}

	if (error) {
		return <p className="text-red-500">{error.message}</p>;
	}
	if (data?.length === 0) {
		return <p> No characters found </p>
	}
	const characters = data as IgdbCharacter[];
	console.log(characters)
	return (
		<>
			<ul className="m-1 flex flex-wrap justify-center justify-items-center gap-2 md:grid  grid-cols-2 lg:grid-cols-3 min-w-[300px] w-full">
				{characters?.map((character) => {
					const isFavorited = state.some((c: IgdbCharacter) => c.id === character.id);

					return (
						<li key={character.id} className="flex  items-center bg-gray-900 border rounded-2xl  transform transition-transform duration-300 hover:scale-105 space-y-4 space-x-4">

							<Card>

								<Link href={`/characters/${character.id}`}>
									{character.mug_shot?.image_id ? (
										<SmallCharacterImage id={character.mug_shot.image_id} />
									) : character.games?.[0]?.cover?.image_id ? (
										<SmallCharacterImage id={character.games[0].cover.image_id} />

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

								</Link>
								<div className="flex w-full  items-center justify-between h-15 justify-self-center" >
									<span className="text-center ml-4 truncate font-bold max-w-[200px] grow">{character.name}</span>

									<FavoriteButton
										onAdd={() => handleAdd(character)}
										onRemove={() => handleRemove(character)}
										isFavorited={isFavorited}
										object={character}
									/>
								</div>


							</Card>
						</li>
					);
				})}
			</ul >
			{!data && defaultMessage
			}
		</>
	)
}

export default ShowCharactersResult 
