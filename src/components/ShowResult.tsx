'use client'
import { useFetchHook } from "@/hooks/useFetchHook"
import { SmallImage, MediumImage } from "./GameImage";
import { useCategoryContext } from "@/context/categoryContext";
export const ShowResult = () => {
	const { category } = useCategoryContext();
	const { data, defaultMessage, error, loading } = useFetchHook(category);

	console.log(data)
	if (loading) {

		return (
			<div className="flex items-center justify-center py-8">
				<svg
					className="w-8 h-8 text-blue-500 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					role="status"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8v8H4z"
					></path>
				</svg>
			</div>
		);
	}

	if (error) {
		return <p className="text-red-500">{error.message}</p>;
	}
	if (data?.length === 0) {
		return <p> No games found </p>
	}
	return (
		<>
			<ul className="m-1 min-w-[300px]">
				{data?.map(game => (
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
						<span>{game.name}</span>
					</li>
				))}
			</ul>
			{!data && defaultMessage}
		</>
	)
}
