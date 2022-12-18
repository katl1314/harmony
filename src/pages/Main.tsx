import { ReactNode } from 'react';
import Controller from '@components/Controller';
import View from '@components/View';
import Board from '@components/Board/Board';
import Content from '@components/Content';

type MainType = {
	totalCnt: number;
	boardList: any[];
	children: ReactNode;
};

const Main = ({ totalCnt, boardList, children }: MainType) => {
	return (
		<>
			<Board>
				<Controller>{children}</Controller>
				<View totalCnt={totalCnt}>
					<Content datas={boardList} />
				</View>
			</Board>
		</>
	);
};

export default Main;
