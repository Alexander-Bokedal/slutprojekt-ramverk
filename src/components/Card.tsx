
import React from 'react';

type CardProps = {
	children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-cyan-50 border border-solid border-amber-950 rounded-xl shadow-lg overflow-hidden">
			{children}
		</div>
	);
};

export default Card;
