'use client'

import { useGameContext } from "@/context/favoriteGamesContext";
import { IgdbGame } from "@/types/types";

const GameInfoBar = () => {

	const { state } = useGameContext();
	const games = state as IgdbGame[]
	function getTotalHoursPlayed(games: IgdbGame[]): number {
		return games.reduce((total, game) => total + (game.info?.hours || 0), 0);
	}

	function averageHoursPlayed(games: IgdbGame[]): number {
		if (games.length === 0) return 0;

		const totalHours = games.reduce((total, game) => total + (game.info?.hours || 0), 0);
		return totalHours / games.length;
	}

	function averageRating(games: IgdbGame[]): number {
		if (games.length === 0) return 0;

		const totalRating = games.reduce((total, game) => total + (game.info?.rating || 0), 0);
		return totalRating / games.length;
	}

	return (
		<div className="w-full flex flex-col gap-5 md:grid grid-cols-2 md:w-1/2 justify-self-center m-2 rounded-2xl justify-items-center items-center justify-evenly px-4 py-2 bg-gray-100 border-t border-gray-300">
			<p> Amount of games: {games.length} </p>
			<p> Total hours played: {getTotalHoursPlayed(games)} </p>
			<p> Average hours played: {Math.floor(averageHoursPlayed(games))} </p>
			<p> Average rating: {Math.floor(averageRating(games))} </p>
		</div>
	);
};

export default GameInfoBar;
