'use client'
import { useFetchSingleCharacter } from "@/hooks/useFetchHook"
import { AlwaysShowMediumImage, AlwaysShowScreenShot } from "@/components/GameImage";
import { IgdbGame } from "@/types/types";
import React from 'react';
import Spinner from "@/components/Spinner";
import TextBox from "@/components/TextBox";

interface GameDetailsProps {
	game: IgdbGame;
}

const GameDetails: React.FC<GameDetailsProps> = () => {


	const { data, loading } = useFetchSingleCharacter('Game');
	if (loading) {
		return <Spinner />
	}
	if (!data) {
		return <p> Waiting for data </p>
	}
	const game = data[0]
	console.log(game)

	const { name, cover, storyline, summary, screenshots } = game;

	console.log('Name', name, 'Cover', cover, 'Shots', screenshots)

	return (

		<div className="max-w-screen-sm mx-auto flex flex-col gap-4 p-4">
			<TextBox>
				<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{name}</h1>
				<div className="w-full mb-6 flex justify-center ">
					{cover && cover.image_id ? (
						<AlwaysShowMediumImage id={cover.image_id} />
					) : (
						<div className="w-full h-80 flex items-center justify-center bg-gray-200 rounded-lg shadow-md">
							<span className="text-gray-500">Cover image not found</span>
						</div>
					)}
				</div>
			</TextBox>

			<TextBox>
				<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Screenshots</h1>
				{screenshots?.length > 0 ? (

					<div className="-mx-4">
						<div className="flex flex-row gap-8 overflow-x-auto whitespace-nowrap px-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
							{screenshots.slice(0, 6).map((shot: { image_id: string }, idx: number) => (
								<div key={idx} className="shrink-0 min-w-[200px]">
									<AlwaysShowScreenShot id={shot.image_id} />
								</div>
							))}
						</div>
					</div>

				) : (
					<div className="mb-6 w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg">
						<span className="text-gray-500">No screenshots available</span>
					</div>

				)

				}

			</TextBox>
			<TextBox>
				{

					storyline ? (
						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-2">Storyline</h2>
							<p className="text-base leading-relaxed">{storyline}</p>
						</div>
					) : null
				}

			</TextBox>
			<TextBox>
				{
					summary ? (
						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-2">Summary</h2>
							<p className="text-base leading-relaxed">{summary}</p>
						</div>
					) : null
				}
			</TextBox>
		</div >
	);
};

export default GameDetails;
