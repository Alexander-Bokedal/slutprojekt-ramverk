
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
			className=" max-h-[374px] min-h-[374px] "
			unoptimized
		/>
	)
}

export const AlwaysShowMediumImage = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_720p/${id}.jpg`;
	return (
		<Image
			src={src}
			alt="Cover photo for game"
			width={264}
			height={374}
			className=" max-h-[374px] border rounded-lg min-h-[374px] "
			unoptimized
		/>
	)
}


export const AlwaysShowScreenShot = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_720p/${id}.jpg`;
	return (
		<Image
			src={src}
			alt="Cover photo for game"
			width={264}
			height={264}
			className="  border rounded-lg  "
			unoptimized
		/>
	)
}


export const SmallCharacterImage = ({ id }: { id: string }) => {
	const src = `https://images.igdb.com/igdb/image/upload/t_720p/${id}.jpg`
	return (
		<Image
			src={src}
			alt="Mug shot"
			width={264}
			height={374}

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


