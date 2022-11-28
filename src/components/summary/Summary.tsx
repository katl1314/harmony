import styled from 'styled-components';
import { BoardType } from '@src/types/Types';
import { H3 } from '@components/fonts/Font';

const Summary = ({ writerId, title, content }: Partial<BoardType>) => {
	return (
		<SummaryWrap>
			<Title>{title}</Title>
			<SummaryContent>{content}</SummaryContent>
			<WriterForm writerId={writerId} />
		</SummaryWrap>
	);
};

const WriterForm = ({ writerId }: Partial<BoardType>) => {
	return (
		<WriterFormWrap>
			<div>{writerId}</div>
		</WriterFormWrap>
	);
};

const SummaryWrap = styled.div`
	margin: auto 0;
	width: 100%;
`;

const Title = styled(H3)`
	/* 두 줄 이상 ellipsis(말줄임)기능 */
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

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
`;

export default Summary;
