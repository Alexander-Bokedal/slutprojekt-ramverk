import { useEffect, useState } from 'react';
import { StarRating } from './StarRating';
import { useGameContext } from '@/context/favoriteGamesContext';
import { IgdbGame } from '@/types/types';
import HoursInput from './HoursInput';

export function SetStarRating({ id }: { id: string }) {
	const { state, dispatch } = useGameContext();
	const [object, setObject] = useState<IgdbGame | null>(null);
	const [rating, setRating] = useState(0);

	const [hoursPlayed, setHoursPlayed] = useState(0)

	useEffect(() => {
		const foundObject = state.find((obj) => obj.id === id) || null;
		setObject(foundObject);
		if (foundObject?.info?.rating) {
			setRating(foundObject.info.rating);
			setHoursPlayed(foundObject.info.hours)
		}
	}, [state, id]);

	const handleRatingChange = (newRating: number) => {
		setRating(newRating);
		if (object) {
			dispatch({
				type: 'UPDATE_INFO',
				payload: {
					id,
					info: {
						hours: object.info?.hours || 0,
						rating: newRating,
					},
				},
			});
		}
	};

	const handleHoursChange = (newValue: number) => {
		setHoursPlayed(newValue);
		if (object) {
			dispatch({
				type: 'UPDATE_INFO',
				payload: {
					id,
					info: {
						hours: newValue,
						rating: object.info?.rating || 0,
					},
				},
			});
		}
	};

	return (
		<div className="flex flex-col">
			<HoursInput hoursPlayed={hoursPlayed} handleHoursChange={handleHoursChange} />
			<StarRating rating={rating} onRatingChange={handleRatingChange} />
		</div>
	);
}
