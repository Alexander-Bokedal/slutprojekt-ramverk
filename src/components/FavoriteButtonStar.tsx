
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IgdbCharacter, IgdbGame } from '@/types/types';

type FavoriteButtonProps = {
	isFavorited: boolean;
	onAdd: (object: IgdbGame | IgdbCharacter) => void;
	onRemove: () => void;
	object: IgdbCharacter | IgdbGame
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
	isFavorited,
	onAdd,
	onRemove,
	object
}) => {
	const handleClick = () => {
		if (isFavorited) {
			onRemove();
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
