import { useState } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';
import { ServiceType } from '@src/types/Types';
import { ServiceFactory } from '@src/services/ServiceFactory';

export const usePage = (initPage: number, initLimitCount: number = 10) => {
	const [currentPage, setCurrentPage] = useState(initPage);

	const fetcher = (ctx: QueryFunctionContext) => {
		const { queryKey } = ctx;
		let firstIndex;
		let limitCount = initLimitCount;
		if (
			!(queryKey instanceof Array) ||
			(queryKey instanceof Array && !queryKey.length)
		) {
			// queryKey가 배열이 아니거나, 빈배열이면 null을 리턴한다.
			return null;
		}
		// queryKey가 배열일때
		firstIndex = queryKey[0]; // const는 블록 스코프임.
		const config = {
			header: { 'Content-Type': 'application/json' },
			params: {
				firstIndex,
				limitCount,
			},
		};

		return fetcherOfPromise('http://127.0.0.1:8080/api/board/page', config);
	};

	const fetcherOfPromise = (url: string, config: ServiceType) => {
		return ServiceFactory.AxiosService.post(url, config);
	};

	const {
		data,
		isFetching,
	}: {
		data: any;
		isFetching: any;
	} = useQuery([currentPage], fetcher, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 60 * 1000, // cache가 신선하다고 인정하는 시간(default: 0)
		keepPreviousData: true, // 새로 fetch한 데이터가 화면에 나오기전까지 이전 데이터를 계속 화면에 유지함.
	});

	const changePageHandler = (page: number) => {
		setCurrentPage(page);
	};

	return [data, isFetching, changePageHandler];
};
