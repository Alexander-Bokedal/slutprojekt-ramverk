'use client'


import { useState, createContext, useContext, } from "react"

export type CategoryType = {
	category: string,
	setCategory: React.Dispatch<React.SetStateAction<string>>
}
export const CategoryContext = createContext<CategoryType | null>(null)

export const useCategoryContext = (): CategoryType => {
	const context = useContext(CategoryContext)

	if (!context) {
		throw new Error(
			"This is outside of your provider"
		);
	}
	return context;

}


type CategoryProviderProps = {
	children: React.ReactNode;
};

export function CategoryContextProvider({
	children,
}: Readonly<CategoryProviderProps>) {
	const [category, setCategory] = useState('Games')

	return (
		<CategoryContext.Provider value={{ category, setCategory }}>
			{children}
		</CategoryContext.Provider>
	)
}



