
'use client'

import React from 'react';
import { createPortal } from 'react-dom';
import { IgdbGame, IgdbCharacter } from '@/types/types';
type ConfirmModalProps = {
	isOpen: boolean;
	message?: string;
	onConfirmAction: (object: IgdbGame | IgdbCharacter) => void;
	onCancelAction: () => void;
	object: IgdbCharacter | IgdbGame
};

export default function ConfirmModal({
	isOpen,
	message = 'Are you sure?',
	onConfirmAction,
	onCancelAction,
	object
}: ConfirmModalProps) {
	if (!isOpen) return null;

	return createPortal(
		<div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg md:mb-[700px] shadow-lg p-8 max-w-sm w-full">
				<p className="mb-6 text-center text-lg font-semibold text-gray-700">{message}</p>
				<div className="flex justify-end space-x-4">
					<button
						onClick={onCancelAction}
						className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md border border-gray-400 hover:bg-gray-400 transition duration-200"
					>
						Cancel
					</button>
					<button
						onClick={() => onConfirmAction(object)}
						className="px-4 py-2 bg-blue-600 text-white rounded-md border border-blue-700 hover:bg-blue-700 transition duration-200"
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
		, document.body
	);
}
