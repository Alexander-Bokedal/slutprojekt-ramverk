'use client'
import { IgdbGame } from "@/types/types"
import { useGameContext } from "@/context/favoriteGamesContext"
import { AlwaysShowMediumImage } from "@/components/GameImage"
import Image from "next/image"
import { useState } from "react"

import UpdateGameModal from "@/components/UpdateGameModal"

const SavedGames = () => {
	const { state, dispatch } = useGameContext();
	const [editingGame, setEditingGame] = useState<IgdbGame | null>(null);
	const handleUpdate = (id: string, hours?: number, rating?: number) => {
		dispatch({
			type: 'UPDATE_INFO',
			payload: {
				id,
				info: {
					hours: hours ?? 0,
					rating: rating ?? 0,
				},
			},
		});
	};
	console.log(state)
	const games = state as IgdbGame[]
	return (
		<>

			<main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
				{games.map((game: IgdbGame) => (
					<div
						key={game.id}
						className="transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
					>
						{game.cover?.image_id ? (
							<AlwaysShowMediumImage id={game.cover.image_id} />
						) : game.screenshots?.[0]?.image_id ? (
							<AlwaysShowMediumImage id={game.screenshots[0].image_id} />
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
							<h2 className="text-lg font-semibold">{game.name}</h2>
						</div>
						<p> Hours played:  {game?.info?.hours ? game.info?.hours : 0} </p>
						<p> Rating: {game?.info?.rating ? game.info.rating : 0} </p>
						<button
							onClick={() => setEditingGame(game)}
							className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
						>
							Edit
						</button>
					</div>
				))}
			</main>
			{editingGame && (
				<UpdateGameModal
					game={editingGame}
					handleUpdate={handleUpdate}
					onClose={() => setEditingGame(null)}
				/>
			)}
		</>
	)
}



export default SavedGames 
