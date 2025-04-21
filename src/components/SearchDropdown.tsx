'use client';
interface Props {
	data: Array<{ id: number; name: string }>;
}

export default function SearchDropdown({ data }: Props) {
	if (data.length === 0) return null;
	return (
		<ul className="mt-2 rounded-md border bg-white shadow max-h-60 overflow-auto">
			{data.map(game => (
				<li
					key={game.id}
					className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
					onClick={() => console.log('Selected:', game.name)}
				>
					{game.name}
				</li>
			))}
		</ul>
	);
}
