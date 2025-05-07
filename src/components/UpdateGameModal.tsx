import { IgdbGame } from '@/types/types';
import { useState } from 'react';

type UpdateGameModalProps = {
	game: IgdbGame;
	handleUpdate: (id: string, hours?: number, rating?: number) => void;
	onClose: () => void;
};

const UpdateGameModal = ({ game, handleUpdate, onClose }: UpdateGameModalProps) => {
	const [hours, setHours] = useState<string>(game.info?.hours?.toString() ?? '');
	const [rating, setRating] = useState<string>(game.info?.rating?.toString() ?? '');

	const handleSave = () => {
		handleUpdate(
			game.id,
			hours !== '' ? Number(hours) : undefined,
			rating !== '' ? Number(rating) : undefined
		);
		onClose();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-xl shadow-lg p-6 w-80">
				<h2 className="text-xl font-semibold mb-4">Update {game.name}</h2>

				<label className="block mb-2">
					Hours Played:
					<input
						type="number"
						value={hours}
						onChange={(e) => setHours(e.target.value)}
						className="mt-1 w-full border rounded-lg p-2"
						placeholder="Enter hours played"
					/>
				</label>

				<label className="block mb-4">
					Rating:
					<input
						type="number"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						className="mt-1 w-full border rounded-lg p-2"
						placeholder="Enter rating"
					/>
				</label>

				<div className="flex justify-end gap-2">
					<button
						onClick={onClose}
						className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
					>
						Cancel
					</button>
					<button
						onClick={handleSave}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateGameModal;
