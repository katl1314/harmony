import { QueryFunctionContext, useQuery } from 'react-query';
import { service } from '@src/services/AxiosService';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '@src/atoms/atoms';

export const useFetch = (
	category: string,
	limit: number = 10
) => {
	const pageState = useRecoilValue(pageInfoSelector);

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

	const { data, refetch } = useQuery([pageState.currentPage], fetcher, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 60 * 1000,
		keepPreviousData: true,
	});

	return [
		{
			...data?.data,
			pages: Math.ceil(data?.data.totalCnt / limit),
		},
		refetch,
	];
};
