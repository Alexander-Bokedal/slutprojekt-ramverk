
import { IgdbCharacter } from '@/types/types'; import { useState } from 'react';

type UpdateCharacterModalProps = {
	character: IgdbCharacter;
	handleUpdate: (id: string, choice: string) => void;
	onClose: () => void;
};

const UpdateCharacterModal = ({ character, handleUpdate, onClose }: UpdateCharacterModalProps) => {
	const [choice, setChoice] = useState(character.choice ?? 'pass');

	const handleSave = () => {
		if (choice) {
			handleUpdate(character.id, choice);
			onClose();
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-xl shadow-lg p-6 w-80">
				<h2 className="text-xl font-semibold mb-4">Rate {character.name}</h2>

				<div className="mb-4">
					<label className="flex items-center mb-2">
						<input
							type="radio"
							name="smashOrPass"
							value="smash"
							checked={choice === 'smash'}
							onChange={() => setChoice('smash')}
							className="mr-2"
						/>
						Smash
					</label>
					<label className="flex items-center">
						<input
							type="radio"
							name="smashOrPass"
							value="pass"
							checked={choice === 'pass'}
							onChange={() => setChoice('pass')}
							className="mr-2"
						/>
						Pass
					</label>
				</div>

				<div className="flex justify-end gap-2">
					<button
						onClick={onClose}
						className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
					>
						Cancel
					</button>
					<button
						onClick={handleSave}
						disabled={choice === ''}
						className={`px-4 py-2 rounded-lg ${choice === ''
							? 'bg-gray-300 text-gray-700 cursor-not-allowed'
							: 'bg-blue-500 text-white hover:bg-blue-600'
							}`}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateCharacterModal;
