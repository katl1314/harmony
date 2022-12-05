import { useEffect, useState, FormEvent } from 'react';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { Routes, Route } from 'react-router-dom';
import Main from '@src/pages/Main';
import SNavLink from '@components/SNavLink';
import Form from '@src/components/Form';
const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const [boardList, setBoardList] = useState([]);
	const [totalCnt, setTotalCnt] = useState(0);
	const [firstIndexSB, setFirstIndexSB] = useState(0);
	const limitCountSB = 10;

	const handlerClick = (page: number) => {
		if (page < 0) {
			return;
		}
		setFirstIndexSB(page * limitCountSB);
	};

	const postRegister = (event: FormEvent) => {
		// 이벤트 동작 제어
		event.preventDefault();
	};

	useEffect(() => {
		// db의 내용 조회함.
		const url = 'http://127.0.0.1:8080/api/board/';
		const config = {
			header: { 'Content-Type': 'application/json' },
			params: {
				firstIndexSB,
				limitCountSB,
			},
		};

		// 중첩 객체가 없을 경우 안전하게 접근하도록 ?.(옵셔널 체이닝)을 사용함.
		ServiceFactory.AxiosService?.post(url, config)
			.then(({ data: { responseData, totalCnt } }) => {
				setBoardList(responseData);
				setTotalCnt(totalCnt);
			})
			.catch((error) => console.error(error));
	}, [firstIndexSB]);

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
							limitCount={limitCountSB}
							firstIndex={firstIndexSB}
							handlerClick={handlerClick}
						>
							<SNavLink
								to="/community/new"
								background="rgb(11,127,211)"
								color="#fff"
								borderradius={5}
							>
								등록하기
							</SNavLink>
						</Main>
					}
				></Route>
				<Route
					path="/new"
					element={<Form onSubmit={postRegister} category="community" />}
				></Route>
			</Routes>
		</>
	);
};

export default Community;
