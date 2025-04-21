'use client'
import { useFetchHook } from "@/hooks/useFetchHook"

export const ShowResult = () => {
	const { data, defaultMessage, error, loading } = useFetchHook();
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
			<ul>
				{data && data.map((game) => {
					return <li key={game.id}> {game.name} </li>
				})}
			</ul>
			{!data && defaultMessage}
		</>
	)
}
