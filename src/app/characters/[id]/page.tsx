'use client'
import { useFetchSingleCharacter } from "@/hooks/useFetchHook"
export default function Character() {

	const { data } = useFetchSingleCharacter('Character');
	console.log(data)

	return (
		<>
			Hello world
		</>
	)
}
