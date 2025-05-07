'use client'
import { useFetchHook } from "@/hooks/useFetchHook"
import { SmallImage, MediumImage } from "./GameImage";

import { useState, useEffect } from 'react'
import { IgdbGame } from "@/types/types";
import ConfirmModal from "./ConfirmModal";
import Link from "next/link";
import Spinner from "./Spinner";
import FavoriteButton from "./FavoriteButtonStar";
import Card from "./Card";
import { useGameContext } from "@/context/favoriteGamesContext";
import { useCategoryContext } from "@/context/categoryContext";
import Image from "next/image";
const ShowGameResult = () => {
	const { dispatch, state } = useGameContext();
	const [showConfirm, setShowConfirm] = useState(false);
	const [pendingGame, setPendingGame] = useState<IgdbGame | null>(null);
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

	const onRemoveClick = (game: IgdbGame) => {
		setShowConfirm(true);
		setPendingGame(game)
	};

	const closeModal = () => {
		setShowConfirm(false);
		setPendingGame(null)
	};
	const handleAdd = (game: IgdbGame) => {
		dispatch({ type: 'ADD_GAME', payload: game });
	};

	const handleConfirmRemove = () => {
		if (pendingGame) {
			dispatch({ type: 'REMOVE_GAME', payload: { id: pendingGame.id } });
		}
		closeModal();
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
			<ul className="m-1 min-w-[300px] flex flex-wrap justify-between w-full">
				{games?.map((game) => {
					const isFavorited = state.some((g) => g.id === game.id);

					return (
						<li key={game.id} className="flex flex-col items-center  ">
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


								<ConfirmModal
									isOpen={showConfirm}
									message={`Are you sure you want to remove this?`}
									onConfirmAction={handleConfirmRemove}
									onCancelAction={closeModal}
									object={game}
								/>
							</Card>

							<div className="flex w-full  items-center justify-center h-15 justify-self-center" >
								<span className="text-center  font-bold max-w-[200px]">{game.name}</span>

								<FavoriteButton
									onAdd={() => handleAdd(game)}
									onRemove={() => onRemoveClick(game)}
									isFavorited={isFavorited}
									object={game}
								/>
							</div>
						</li>
					);
				})}
			</ul>
			{!data && defaultMessage}
		</>
	)
}

export default ShowGameResult
