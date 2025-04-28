'use client';

import { useCategoryContext } from "@/context/categoryContext";

const CategoryPicker = () => {
	const { category, setCategory } = useCategoryContext();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};

	return (
		<div className="w-full max-w-xs mb-2 mt-2 ">
			<label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
				Choose a Category
			</label>
			<select
				id="category"
				value={category}
				onChange={handleChange}
				className="mt-1 block  rounded-md border-gray-300 bg-gray-50 text-gray-800 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
			>
				<option value="Games">Games</option>
				<option value="Characters">Characters</option>
			</select>
		</div>
	);
};

export default CategoryPicker;
