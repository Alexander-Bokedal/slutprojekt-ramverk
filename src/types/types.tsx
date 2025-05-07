
export type IgdbCharacter = {
	id: string;
	name: string;
	description: string;
	games: {
		id: number;
		cover: {
			id: number;
			image_id: string;
		};
		name: string;
	}[];
	mug_shot: {
		id: number;
		height: number;
		width: number;
		image_id: string;
		url: string;
		checksum: string;
	};
	choice: string
};



export type IgdbGame = {
	id: string,
	cover: {
		id: string,
		image_id: string,

	}
	storyline: string,
	summary: string,
	screenshots: [
		{
			image_id: string
		}
	];
	name: string
	info?: {
		hours: number,
		rating: number,
	}
}
