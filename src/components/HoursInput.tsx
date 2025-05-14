import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";

type Props = {
	hoursPlayed: number;
	handleHoursChange: (value: number) => void;
};

const HoursInput = ({ hoursPlayed, handleHoursChange }: Props) => {
	const [inputValue, setInputValue] = useState<string>(hoursPlayed.toString());

	useEffect(() => {
		setInputValue(hoursPlayed.toString());
	}, [hoursPlayed]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleCommit = () => {
		const parsed = parseFloat(inputValue);
		if (!isNaN(parsed)) {
			handleHoursChange(parsed);
		} else {
			setInputValue(hoursPlayed.toString());
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleCommit();
			e.currentTarget.blur();
		}
	};

	return (
		<div className="flex items-center ">

			<p> Hours Played: </p>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				onBlur={handleCommit}
				onKeyDown={handleKeyDown}
				className="border  w-24 border-transparent bg-transparent px-2 py-1 rounded-md transition-all
                 focus:outline-none focus:border-gray-500 focus:bg-white"
				placeholder="Enter hours"
			/>
		</div>
	);
};

export default HoursInput;
