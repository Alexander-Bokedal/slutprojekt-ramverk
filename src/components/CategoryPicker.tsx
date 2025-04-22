'use client'
import { useCategoryContext } from "@/context/categoryContext"

const CategoryPicker = () => {
	const { category, setCategory } = useCategoryContext();
	console.log(category)
	return (
		<>
			<button onClick={() => { setCategory('Games') }}> Games </button>

			<button onClick={() => { setCategory('Characters') }}> Characters </button>
		</>
	)
}

export default CategoryPicker
