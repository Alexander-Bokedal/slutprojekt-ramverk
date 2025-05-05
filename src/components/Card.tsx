
import React from 'react';

type CardProps = {
	children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="border flex items-start justify-between w-full rounded-lg p-4 transition-transform duration-300 transform hover:scale-105 shadow-md mt-2 mb-2 bg-[rgba(255,255,255,0.2)] ">
			{children}
		</div>
	);
};

export default Card;
