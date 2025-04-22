'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
interface IgdbGame {
	id: number,
	cover: {
		id: number,
		image_id: string,
	}
	name: string
}

type IgdbData = IgdbGame[];

interface UseIgdbSearchResult {
	data: IgdbData | null;
	loading: boolean;
	error: Error | null;
	defaultMessage: string;
}

export function useFetchHook(category: string): UseIgdbSearchResult {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || ''
	const [data, setData] = useState<IgdbData | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	const defaultMessage = 'No query registered'

	useEffect(() => {
		if (!query) {
			setData(null)
			return
		}
		const fetchData = async () => {

			try {
				setLoading(true)
				const res = await fetch(`/api/igdb${category}?query=${encodeURIComponent(query)}`, {
					method: 'GET',
				});
				if (!res.ok) {
					throw new Error(`Error: ${res.statusText}`);
				}
				const result: IgdbData = await res.json();
				setData(result);
			} catch (err: any) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData()
	}, [query, category]);

	return { data, loading, error, defaultMessage };
}

