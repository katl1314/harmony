import useDetail from '@src/hooks/useDetail';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailView = () => {
	// 상위 경로의 파라미터를 하위 경로에서 받을 수 있음.
	const params = useParams();
	const boardId: number = Number(params.boardId);

	const [state] = useDetail(boardId);

	return (
		<DetailViewWrap>
			<div>{state.title}</div>
			<div>{state.displayName}</div>
			<div>{new Date(state.createDt).toLocaleTimeString()}</div>
			<div>{state.content}</div>
		</DetailViewWrap>
	);
};

const DetailViewWrap = styled.div`
	width: 100%;
`;

export default DetailView;
