'use client'
import Link from "next/link";
import { IgdbCharacter, useFetchHook } from "@/hooks/useFetchHook"
import { SmallCharacterImage, } from "./GameImage";
import { useCategoryContext } from "@/context/categoryContext";
import Spinner from "./Spinner";
const ShowCharactersResult = () => {
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

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
	return (
		<>
			<ul className="m-1 min-w-[300px]">
				{characters?.map(character => (
					<li key={character.id} className="flex items-center space-y-4 space-x-4 ">
						{character.mug_shot?.url ? (
							<>
								<SmallCharacterImage url={character.mug_shot.url} />

							</>
						) : (
							<div className="flex items-center justify-center min-w-[90px] min-h-[128px]  border border-blue-400" >
								<p className="text-sm md:text-lg italic text-gray-500 text-center">404</p>
							</div>
						)}
						<Link href={`/characters/${character.id}`}>
							<span>{character.name}</span>
						</Link>
					</li>
				))}
			</ul>
			{!data && defaultMessage}
		</>
	)
}

export default ShowCharactersResult 
