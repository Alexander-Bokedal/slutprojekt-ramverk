'use client'
import { useFetchSingleCharacter } from "@/hooks/useFetchHook"
import { AlwaysShowMediumImage, AlwaysShowScreenShot } from "@/components/GameImage";
import React from 'react';
import Spinner from "@/components/Spinner";

export type IgdbCharacter = {
	id: string;
	cover: {
		id: string;
		image_id: string;
	};
	storyline: string;
	summary: string;
	screenshots: { id: string, image_id: string, url: string }[];
	name: string;
};

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

	// const { name, cover, storyline, summary, screenshots } = character;

	// console.log('Name', name, 'Cover', cover, 'Shots', screenshots)

	return (

		<div className="max-w-screen-sm mx-auto p-4">
			{/* <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{name}</h1> */}
			{/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
			{/* 	<div className="w-full mb-6 flex justify-center md:justify-start"> */}
			{/* 		{cover && cover.image_id ? ( */}
			{/* 			<AlwaysShowMediumImage id={cover.image_id} /> */}
			{/* 		) : ( */}
			{/* 			<div className="w-full h-80 flex items-center justify-center bg-gray-200 rounded-lg shadow-md"> */}
			{/* 				<span className="text-gray-500">Cover image not found</span> */}
			{/* 			</div> */}
			{/* 		)} */}
			{/* 	</div> */}
			{/**/}
			{/* 	{screenshots?.length > 0 ? ( */}
			{/* 		<div className="flex flex-wrap shrink   justify-evenly"> */}
			{/* 			{screenshots.slice(0, 6).map((shot: { url: string }, idx: number) => ( */}
			{/* 				<div key={idx} className=""> */}
			{/* 					<AlwaysShowScreenShot url={shot.url} /> */}
			{/* 				</div> */}
			{/* 			))} */}
			{/* 		</div> */}
			{/* 	) : ( */}
			{/* 		<div className="mb-6 w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg"> */}
			{/* 			<span className="text-gray-500">No screenshots available</span> */}
			{/* 		</div> */}
			{/* 	)} */}
			{/* </div> */}
			{/* {storyline ? ( */}
			{/* 	<div className="mb-6"> */}
			{/* 		<h2 className="text-xl font-semibold mb-2">Storyline</h2> */}
			{/* 		<p className="text-base leading-relaxed">{storyline}</p> */}
			{/* 	</div> */}
			{/* ) : null} */}
			{/**/}
			{/* {summary ? ( */}
			{/* 	<div className="mb-6"> */}
			{/* 		<h2 className="text-xl font-semibold mb-2">Summary</h2> */}
			{/* 		<p className="text-base leading-relaxed">{summary}</p> */}
			{/* 	</div> */}
			{/* ) : null} */}
		</div>
	);
};

export default GameDetails;
