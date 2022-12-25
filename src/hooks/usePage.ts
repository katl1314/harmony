import { useState, useEffect } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';
import { ServiceType } from '@src/types/Types';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { Arrays } from '@src/utils';
import { useLocation } from 'react-router-dom';

export const usePage = (
	initPage: number,
	category: string,
	limit: number = 10
) => {
	const { state } = useLocation();
	const [currentPage, setCurrentPage] = useState(initPage);

	const fetcher = (ctx: QueryFunctionContext) => {
		// ctx : useQuery함수의 첫번째 인자값. (key)
		// key의 역할은 React Query가 query캐싱을 관리할 수 있도록 도와줌.
		// 서버에 데이터를 요청하기 전 key에 대한 결과가 이미 존재하면 추가 요청을 하지 않는다.
		const { queryKey } = ctx;
		if (!Arrays.isArray(queryKey) || Arrays.isEmpty(queryKey)) {
			// queryKey가 배열이 아니거나, 빈배열이면 null을 리턴한다.
			return null;
		}

		// queryKey가 배열일때
		let currentPage: number = queryKey[0] as number; // const는 블록 스코프임.
		let offset = makePageOffset(currentPage);

		const config = {
			header: { 'Content-Type': 'application/json' },
			params: { offset, limit },
		};

		return fetcherOfPromise(`/${category}/page`, config);
	};

	const makePageOffset = (currentPage: number) => {
		return currentPage === 1 ? currentPage - 1 : (currentPage - 1) * limit;
	};

	const fetcherOfPromise = (url: string, config: ServiceType) => {
		return ServiceFactory.AxiosService.post(url, config);
	};

	// useQuery는 react-query에서 서버로부터 데이터를 조회할때 사용하는 HOOK임.
	// useMutation은 서버에 데이터를 전달하여 데이터 변경 작업시 사용하는 HOOK임.
	const { data, isFetching } = useQuery([currentPage, state], fetcher, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		staleTime: 60 * 1000, // cache가 신선하다고 인정하는 시간(default: 0) => 현재 60000ms => 1분
		keepPreviousData: true, // 새로 fetch한 데이터가 화면에 나오기전까지 이전 데이터를 계속 화면에 유지함.
	});

	const changePageHandler = (page: number) => {
		setCurrentPage(page);
	};
	return [data?.data, isFetching, changePageHandler];
};
