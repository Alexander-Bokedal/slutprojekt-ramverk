
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

type FavoriteButtonProps = {
	isFavorited: boolean;
	onAdd: (game: any) => void;
	onRemove: (game: any) => void;
	object: any
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
	isFavorited,
	onAdd,
	onRemove,
	object
}) => {
	const handleClick = () => {
		if (isFavorited) {
			onRemove(object);
		} else {
			onAdd(object);
		}
	};

	return (
		<button
			onClick={handleClick}
			aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
			style={{
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				padding: 0,
			}}
		>
			{isFavorited ? (
				<FaStar color="gold" size={24} />
			) : (
				<FaRegStar color="black" size={24} />
			)}
		</button>
	);
};

export default FavoriteButton;
