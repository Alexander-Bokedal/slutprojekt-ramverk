
import Image from "next/image";



export const SmallImage = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_cover_small/${id}.jpg`
	return (
		<Image
			src={src}
			alt="Cover photo for game"
			width={90}
			height={128}
			className="max-h-[128px] min-h-[128px] md:hidden"
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
			className=" max-h-[374px] min-h-[374px] hidden md:block"
			unoptimized
		/>
	)
}

export const SmallCharacterImage = ({ url }: { url: string }) => {
	const src = `https:${url}`
	return (
		<Image
			src={src}
			alt="Mug shot"
			width={120}
			height={120}

		/>
	)
}


export const MediumCharacterImage = ({ url }: { url: string }) => {
	const src = `https:${url}`
	return (
		<Image
			src={src}
			alt="Mug shot"
			width={264}
			height={374}

			className=" max-h-[374px] hidden md:block"
		/>
	)
}


