import { useState, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { queryClient } from '@src/main';
import Main from '@src/pages/Main';
import HeaderNavLink from '@src/components/HeaderNavLink';
import Form from '@components/Form';

const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const limitCount = 10;
	const [firstIndex, setFirstIndex] = useState(0);
	// 게시글을 불러오는 비동기 api함수
	const fetchCommunity = async ({ queryKey }: { queryKey: any }) => {
		const [_, firstIndex] = queryKey;
		const config = {
			header: { 'Content-Type': 'application/json' },
			params: {
				firstIndex,
				limitCount,
			},
		};

		const data = await ServiceFactory.AxiosService?.post(
			`http://127.0.0.1:8080/api/board/page`,
			config
		);

		return data;
	};

	const { status, data } = useQuery(['community', firstIndex], fetchCommunity, {
		refetchOnMount: false, // 마운트시 데이터 서버의 최신 데이터를 refetching(다시 가져온다.)
		refetchOnWindowFocus: true,
		refetchOnReconnect: false,
		retry: false,
	});
	const handlerClick = (page: number) => {
		if (page < 0) {
			return;
		}
		setFirstIndex(page * limitCount);
		queryClient.invalidateQueries('community');
	};

	if (status !== 'success') {
		return status === 'loading' ? (
			<div>로딩중</div>
		) : (
			<div>서버와 연결이 실패하였습니다.</div>
		);
	}

	const {
		data: { totalCnt, responseData: boardList },
	} = data;
	return (
		// 조건부 렌더링 실습 isLoading상태값에 따라 보여주는 React엘리먼트는 다름.
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Main
							totalCnt={totalCnt}
							boardList={boardList}
							limitCount={limitCount}
							firstIndex={firstIndex}
							handlerClick={handlerClick}
						>
							<HeaderNavLink
								to="/community/new"
								background="rgb(11,127,211)"
								color="#fff"
								borderradius={5}
							>
								등록하기
							</HeaderNavLink>
						</Main>
					}
				></Route>
				<Route path="/new" element={<Form category="community" />}></Route>
			</Routes>
		</>
	);
};

export default memo(Community);

// react-query useMutation => React Query를 이용하여 서버에 데이터 변경 작업을 요청시 사용함.
// 단순 데이터 조회가 아닌, 값을 변경할 경우(insert, update, delete)
// 변경된 데이터를 호출하기 위해서는 mutate를 호출함. (useMutation에 작성된 내용들이 실행하도록 trigger역할 담당.)
/* const changePageMutation = useMutation(fetchCommunity, {
		onMutate: ({ page }: { page: number }) => {
			setFirstIndexSB(page);
			queryClient.invalidateQueries('community'); // 값 변경 후 재 실행
		},
		onError: (error, variable, context) => {
			console.log('onError', error);
		},
	}); */
