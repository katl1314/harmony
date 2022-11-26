import styled from 'styled-components';
import { BoardType } from '@src/types/Types';
import { H3 } from '@components/fonts/Font';

const Summary = ({ writerId, title, content }: Partial<BoardType>) => {
	return (
		<SummaryWrap>
			<H3>{title}</H3>
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
	& > div:first-of-type {
		padding: 1em 0;
	}
`;

const SummaryContent = styled.div`
	width: 100%;
	overflow: hidden;
	white-space: pre-wrap;
	line-height: 1.5em;
	font-size: 0.9em;
`;

const WriterFormWrap = styled.div`
	display: flex;
`;

export default Summary;
