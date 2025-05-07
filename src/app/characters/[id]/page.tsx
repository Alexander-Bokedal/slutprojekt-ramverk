'use client'
import { useFetchSingleCharacter } from "@/hooks/useFetchHook"
import { AlwaysShowMediumImage, MediumImage, MediumCharacterImage, AlwaysShowScreenShot } from "@/components/GameImage";
import { IgdbCharacter } from "@/types/types";
import React from 'react';
import Spinner from "@/components/Spinner";


interface CharacterDetailProps {
	game: IgdbCharacter;
}

const GameDetails: React.FC<CharacterDetailProps> = () => {


	const { data, loading } = useFetchSingleCharacter('Character');
	if (loading) {
		return <Spinner />
	}
	if (!data) {
		return <p> Waiting for data </p>
	}
	const character = data[0]
	console.log(character)

	const { name, mug_shot, description, games } = character;

	console.log('Name', name, 'Mugshot', mug_shot, 'Games', games)

	return (

		<div className="max-w-screen-sm mx-auto p-4">
			<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{name}</h1>
			<div className="grid grid-cols-1 ">
				<div className="w-full mb-6 flex justify-center ">
					{mug_shot && mug_shot.image_id ? (
						<AlwaysShowMediumImage id={mug_shot.image_id} />
					) : (
						<div className="w-full h-80 flex items-center justify-center bg-gray-200 rounded-lg shadow-md">
							<span className="text-gray-500">Cover image not found</span>
						</div>
					)}
				</div>

				<h1> Featured in games </h1>
				{games?.length > 0 ? (
					<div className="flex justify-start gap-8 overflow-x-auto whitespace-nowrap px-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
						{games.map((game: {
							id: number;
							cover: {
								id: number;
								image_id: string;
							};
							name: string;
						}, idx: number) => (
							<div key={idx} className="inline-block flex-shrink-0 min-w-[150px]">
								<AlwaysShowMediumImage id={game.cover.image_id} />
							</div>
						))}
					</div>
				) : (
					<div className="mb-6 w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg">
						<span className="text-gray-500">No screenshots available</span>
					</div>
				)}
				<h1> Description </h1>
				{description}
			</div>
		</div>
	);
};

export default GameDetails;
