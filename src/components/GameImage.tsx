
import Image from "next/image";



export const SmallImage = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_cover_small/${id}.jpg`
	return (
		<Image
			src={src}
			alt="Cover photo for game"
			width={90}
			height={128}
			className=" md:hidden"
			unoptimized
		/>
	)
}


export const MediumImage = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_cover_big/${id}.jpg`;
	return (
		<Image
			src={src}
			alt="Cover photo for game"
			width={264}
			height={374}
			className=" hidden md:block"
			unoptimized
		/>
	)
}




