import styled from 'styled-components';
import { BoardType } from '@src/types/Types';
import moment from 'moment';
const Summary = ({
	writerId,
	createDt,
	title,
	content,
}: Partial<BoardType>) => {
	return (
		<SummaryWrap>
			<Title>{title}</Title>
			<SummaryContent>{content}</SummaryContent>
			<WriterForm writerId={writerId} createDt={createDt} />
		</SummaryWrap>
	);
};

const WriterForm = ({ writerId, createDt }: Partial<BoardType>) => {
	return (
		<WriterFormWrap>
			<div>{writerId}</div>
			<div>{moment(createDt).format('YYYY-MM-DD HH:mm:ss')}</div>
		</WriterFormWrap>
	);
};

const SummaryWrap = styled.div`
	margin: auto 0;
	width: 100%;
`;

const Title = styled.h3`
	/* 두 줄 이상 ellipsis(말줄임)기능 */
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const SummaryContent = styled.div`
	width: 100%;
	overflow: hidden;
	white-space: pre-wrap;
	line-height: 1.5em;
	font-size: 0.9em;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

const WriterFormWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default Summary;
