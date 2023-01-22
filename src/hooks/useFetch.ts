import { useState } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';
import { service } from '@src/services/AxiosService';

export const useFetch = (
	initPage: number,
	category: string,
	limit: number = 10
) => {
	const [currentPage, setCurrentPage] = useState(initPage);

	const url = `/${category}/page`;
	const fetcher = async (ctx: QueryFunctionContext) => {
		const { queryKey: key } = ctx;
		let page: number = key[0] as number;
		let offset = makePageOffset(page);

		const params = { offset, limit };

		return await service.post(url, null, { params });
	};

	const makePageOffset = (page: number) => {
		return page === 1 ? page - 1 : (page - 1) * limit;
	};

	const { data, refetch } = useQuery([currentPage], fetcher, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 60 * 1000,
		keepPreviousData: true,
	});

	const changePageHandler = (page: number) => {
		setCurrentPage(page);
	};

	return [
		{
			...data?.data,
			currentPage,
			pages: Math.ceil(data?.data.totalCnt / limit),
		},
		refetch,
		changePageHandler,
	];
};
