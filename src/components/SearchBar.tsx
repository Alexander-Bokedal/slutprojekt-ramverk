'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({ }) {
	const [value, setValue] = useState('');
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleSearch(term: string) {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}

		replace(`${pathname}?${params.toString()}`);
		setValue('')
	}

	return (
		<div className="relative w-full flex justify-center">
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && handleSearch(value)}
				placeholder="Search games..."
				className="w-full bg-white rounded-md border px-3 py-2"
			/>
			<button
				onClick={() => { handleSearch(value) }}
				className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded"
			>
				Go
			</button>
		</div>
	);
}
