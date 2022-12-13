import { ReactNode } from 'react';
import Controller from '@components/Controller';
import Page from '@components/Page';
import View from '@components/View';
import Board from '@components/Board';
import Content from '@components/Content';
import Sidemenu from '@components/Sidemenu';

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
			<Board>
				<Controller>{children}</Controller>
				<View totalCnt={totalCnt}>
					<Page
						totalCnt={totalCnt}
						limitCount={limitCount}
						firstIndex={firstIndex}
						onPageClick={handlerClick}
					/>
					<Content datas={boardList} />
				</View>
			</Board>
		</>
	);
};

export default Main;
