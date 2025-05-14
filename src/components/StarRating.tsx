import { useState } from 'react';

type StarRatingProps = {
	rating: number;
	onRatingChange: (rating: number) => void;
	maxStars?: number;
};

export function StarRating({ rating, onRatingChange, maxStars = 5 }: StarRatingProps) {
	const [hoveredRating, setHoveredRating] = useState(0);

	return (
		<div className="flex">
			{Array.from({ length: maxStars }, (_, index) => {
				const starValue = index + 1;
				return (
					<svg
						key={starValue}
						onClick={() => onRatingChange(starValue)}
						onMouseEnter={() => setHoveredRating(starValue)}
						onMouseLeave={() => setHoveredRating(0)}
						xmlns="http://www.w3.org/2000/svg"
						className={`h-6 w-6 cursor-pointer ${starValue <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'
							}`}
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
					</svg>
				);
			})}
		</div>
	);
}
