'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
interface IgdbGame {
	id: number,
	name: string
}

type IgdbData = IgdbGame[];

interface UseIgdbSearchResult {
	data: IgdbData | null;
	loading: boolean;
	error: Error | null;
	defaultMessage: string;
}

export function useFetchHook(): UseIgdbSearchResult {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || ''
	const [data, setData] = useState<IgdbData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const defaultMessage = 'No query registered'

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const res = await fetch(`/api/igdbSearch?query=${encodeURIComponent(query)}`, {
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

		if (query) {
			fetchData();
		} else {
			setData(null)
		}
	}, [query]);

	return { data, loading, error, defaultMessage };
}

