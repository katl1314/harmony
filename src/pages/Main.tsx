import Summary from '@components/summary/Summary';
import Page from '@components/page/Page';
import View from '@components/View';
import Controller from '@components/Controller';
import { BoardType } from '@src/types/Types';
import styled from 'styled-components';
import { ReactNode } from 'react';

type MainType = {
	totalCnt: number;
	boardList: any[];
	limitCount: number;
	firstIndex: number;
	handlerClick: (index: number) => void;
	children: ReactNode;
};

const Main = ({
	totalCnt,
	boardList,
	limitCount,
	firstIndex,
	handlerClick,
	children,
}: MainType) => {
	return (
		<>
			<Controller>{children}</Controller>
			<View totalCnt={totalCnt}>
				<Content datas={boardList} />
				<Page
					totalCnt={totalCnt}
					limitCount={limitCount}
					firstIndex={firstIndex}
					onPageClick={handlerClick}
				/>
			</View>
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
	padding: 1.5em;
	border-bottom: 1px dashed #e5e5e5;
`;

export default Main;
