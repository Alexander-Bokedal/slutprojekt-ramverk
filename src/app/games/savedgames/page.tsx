'use client'
import { IgdbGame } from "@/types/types"
import { useGameContext } from "@/context/favoriteGamesContext"
import { AlwaysShowMediumImage } from "@/components/GameImage"
import Image from "next/image"
import { useState } from "react"
import { SetStarRating } from "@/components/SetStarRating"
import UpdateGameModal from "@/components/UpdateGameModal"
import GameInfoBar from "@/components/GameInfoBar"
import Card from "@/components/Card"

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


			<GameInfoBar />
			<main className="flex justify-center">

				<ul className="flex flex-col gap-20 items-center md:grid grid-cols-2 lg:grid-cols-3 ">
					{games.map((game: IgdbGame) => (
						<li
							key={game.id}
						>
							<Card>
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
									<h2 className="text-center ml-4 truncate font-bold max-w-[200px] grow">{game.name}</h2>
								</div>
							</Card>
							<div className="bg-white border border-gray-300 rounded-xl shadow-md p-4 w-full max-w-md">
								<div className=" mb-4">
									<span className="font-semibold"><SetStarRating id={game.id} /> </span>
								</div>
							</div>
						</li>
					))}
				</ul>
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
