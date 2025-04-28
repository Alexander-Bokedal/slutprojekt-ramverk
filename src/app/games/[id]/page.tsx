
'use client'
import { useFetchSingleCharacter } from "@/hooks/useFetchHook"
export default function Character() {

	const { data } = useFetchSingleCharacter('Game');
	console.log(data)

	return (
		<>
			Hello world
		</>
	)
}
