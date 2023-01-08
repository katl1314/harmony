import { useState } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';
import { service } from '@src/services/AxiosService';

export const usePage = (
	initPage: number,
	category: string,
	limit: number = 10
) => {
	const [currentPage, setCurrentPage] = useState(initPage);
	const url = `/${category}/page`;
	const fetcher = async (ctx: QueryFunctionContext) => {
		// ctx : useQuery함수의 첫번째 인자값. (key)
		// key의 역할은 React Query가 query캐싱을 관리할 수 있도록 도와줌.
		// 서버에 데이터를 요청하기 전 key에 대한 결과가 이미 존재하면 추가 요청을 하지 않는다.
		const { queryKey: key } = ctx;
		// queryKey가 배열일때
		let currentPage: number = key[1] as number; // const는 블록 스코프임.
		let offset = makePageOffset(currentPage);

		const params = { offset, limit };

		return await service.post(url, null, { params });
	};

	const makePageOffset = (currentPage: number) => {
		return currentPage === 1 ? currentPage - 1 : (currentPage - 1) * limit;
	};

	// useQuery는 react-query에서 서버로부터 데이터를 조회할때 사용하는 HOOK임.
	// useMutation은 서버에 데이터를 전달하여 데이터 변경 작업시 사용하는 HOOK임.
	const { data, refetch } = useQuery([url, currentPage], fetcher, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 60 * 1000, // cache가 신선하다고 인정하는 시간(default: 0) => 현재 60000ms => 1분
		keepPreviousData: true, // 새로 fetch한 데이터가 화면에 나오기전까지 이전 데이터를 계속 화면에 유지함.
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
