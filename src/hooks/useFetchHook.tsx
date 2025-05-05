'use client'
import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
export type IgdbGame = {
	id: string,
	cover: {
		id: string,
		image_id: string,

	}
	screenshots: [
		{
			image_id: string
		}
	];
	name: string
}

export type IgdbCharacter = {
	id: string,
	mug_shot: {
		id: number,
		url: string,
	}
	games: [
		{
			id: string,
			cover: {
				id: string,
				url: string
			}
		}
	]
	name: string,
	description: string,
}



type IgdbData = IgdbGame[] | IgdbCharacter[];

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


export function useFetchSingleCharacter(category: string): any {
	const { id } = useParams();
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	const defaultMessage = 'No query registered'

	useEffect(() => {
		const fetchData = async () => {

			try {
				setLoading(true)
				const res = await fetch(`/api/igdbSingle${category}/${id}`, {
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
	}, [id]);

	return { data, loading, error, defaultMessage };
}
