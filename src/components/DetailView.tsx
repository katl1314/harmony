import { BoardType, UserType } from '@src/types/Types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailView = ({ data }: { data: Array<BoardType & UserType> }) => {
	const params = useParams();
	const boardId = params.boardId;

	const objBoard = data.find((d) => d.boardId === boardId);

	if (objBoard) {
		const { title, content, createDt, displayName } = objBoard;

		return (
			<DetailViewWrap>
				<div>{title}</div>
				<div>{displayName}</div>
				<div>{new Date(createDt).toLocaleTimeString()}</div>
				<div>{content}</div>
			</DetailViewWrap>
		);
	}
	return null;
};

const DetailViewWrap = styled.div`
	width: 100%;
`;

export default DetailView;
