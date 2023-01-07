import { BoardType, UserType } from '@src/types/Types';
import SummaryView from '@components/SummaryView';

const Content = ({ data }: { data: Array<BoardType & UserType> }) => {
	const BoardList = data.map((d: BoardType & UserType) => {
		return <SummaryView data={d} key={`${d.boardId}`} />;
	});
	return <div>{BoardList}</div>;
};

export default Content;
