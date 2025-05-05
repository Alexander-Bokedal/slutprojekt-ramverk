'use client'
import { useFetchHook, IgdbGame } from "@/hooks/useFetchHook"
import { SmallImage, MediumImage } from "./GameImage";
import { useCategoryContext } from "@/context/categoryContext";
import { useEffect } from 'react'
import Link from "next/link";
import Spinner from "./Spinner";
import FavoriteButton from "./FavoriteButtonStar";
import Card from "./Card";
import { useGameContext } from "@/context/favoriteGamesContext";
import Image from "next/image";
const ShowGameResult = () => {
	const { dispatch, state } = useGameContext();
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

	const handleAdd = (game: any) => {
		dispatch({ type: 'ADD_GAME', payload: game });
	};

	const handleRemove = (game: any) => {
		dispatch({ type: 'REMOVE_GAME', payload: { id: game.id } });
	};
	useEffect(() => {
		console.log(state)
	}, [state])
	if (category !== 'Games') return null
	console.log(data)
	if (loading) {
		return <Spinner />
	}

	if (error) {
		return <p className="text-red-500">{error.message}</p>;
	}
	if (data?.length === 0) {
		return <p> No games found </p>
	}

	const games = data as IgdbGame[];
	return (
		<>
			<ul className="m-1 min-w-[300px] w-full">
				{games?.map((game) => {
					const isFavorited = state.games.some((g) => g.id === game.id);

					return (
						<li key={game.id} className="flex items-center space-y-4 space-x-4">
							<Card>

								<Link href={`/games/${game.id}`}>
									{game.cover?.image_id ? (
										<>
											<SmallImage id={game.cover.image_id} />
											<MediumImage id={game.cover.image_id} />
										</>
									) : game.screenshots?.[0] ? (
										<>
											<SmallImage id={game.screenshots[0].image_id} />
											<MediumImage id={game.screenshots[0].image_id} />
										</>
									) : (
										<div className="flex items-center justify-center min-w-[90px] min-h-[128px] md:min-w-[264px] md:min-h-[374px] border border-blue-400">
											<Image

												src='/fallback.png'
												alt="Fallback image"
												width={90}

												height={90}
												className=" flex items-center justify-center min-w-[90px] min-h-[128px] md:min-w-[264px] md:min-h-[374px] bg-gray-600 "
											/>
										</div>
									)}

								</Link>

								<Link href={`/games/${game.id}`}>
									<span>{game.name}</span>
								</Link>

								<FavoriteButton
									onAdd={() => handleAdd(game)}
									onRemove={() => handleRemove(game)}
									isFavorited={isFavorited}
									object={game}
								/>
							</Card>
						</li>
					);
				})}
			</ul>
			{!data && defaultMessage}
		</>
	)
}

export default ShowGameResult
