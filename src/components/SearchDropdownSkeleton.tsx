

const SKELETON_COUNT = 5;

const SearchDropdownSkeleton = () => {
	return (
		<ul className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg z-10">
			{Array.from({ length: SKELETON_COUNT }).map((_, index) => (
				<li
					key={index}
					className="px-4 py-2 my-1 animate-pulse bg-gray-100 rounded-md h-6"
				/>
			))}
		</ul>
	);
};

export default SearchDropdownSkeleton;
