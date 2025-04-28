'use client'
import { useFetchHook, IgdbGame } from "@/hooks/useFetchHook"
import { SmallImage, MediumImage } from "./GameImage";
import { useCategoryContext } from "@/context/categoryContext";
import Link from "next/link";
import Spinner from "./Spinner";
const ShowGameResult = () => {
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

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
			<ul className="m-1 min-w-[300px]">
				{games?.map(game => (
					<li key={game.id} className="flex items-center space-y-4 space-x-4 ">
						{game.cover?.image_id ? (
							<>

								<SmallImage id={game.cover.image_id} />
								<MediumImage id={game.cover.image_id} />
							</>
						) : (
							<div className="flex items-center justify-center min-w-[90px] min-h-[128px] md:min-w-[264px] md:min-h-[374px] border border-blue-400" >
								<p className="text-sm md:text-lg italic text-gray-500 text-center">404</p>
							</div>
						)}

						<Link href={`/games/${game.id}`}>
							<span>{game.name}</span>
						</Link>
					</li>
				))}
			</ul>
			{!data && defaultMessage}
		</>
	)
}

export default ShowGameResult
