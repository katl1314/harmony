import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BoardType } from '@src/types/Types';
import { ServiceFactory } from '@src/services/ServiceFactory';
import Summary from '@components/summary/Summary';
import Page from '@components/page/Page';
import Form from '@components/Form/Form';

const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const [boardList, setBoardList] = useState([]);
	const [totalCnt, setTotalCnt] = useState(0);
	const [firstIndexSB, setFirstIndexSB] = useState(0);
	const limitCountSB = 10;

	const handlerClick = (index: number) => {
		if (index < 0) {
			return;
		}
		setFirstIndexSB(index * limitCountSB);
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
			<div>
				<Form />
				<Content datas={boardList} />
				<Page
					totalCnt={totalCnt}
					limitCount={limitCountSB}
					currentPage={firstIndexSB / limitCountSB}
					onPageClick={handlerClick}
				/>
			</div>
		</>
	);
};

const Content = ({ datas }: { datas: Array<BoardType> }) => {
	const BoardList = datas.map(
		({ boardId, writerId, title, content, createDt }: BoardType, i: number) => {
			return (
				<ContentWrap key={`${boardId}_${i}`}>
					<Summary
						title={title}
						content={content}
						createDt={createDt}
						writerId={writerId}
						boardId={boardId}
					/>
				</ContentWrap>
			);
		}
	);
	return <div>{BoardList}</div>;
};

const ContentWrap = styled.div`
	display: flex;
	margin: 1vh;
	border-bottom: 1px dashed #e5e5e5;
`;

export default Community;
