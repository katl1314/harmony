import moment from 'moment';
import { BoardType, UserType } from '@src/types/Types';
import styled from 'styled-components';

const SummaryWriterView = ({
	displayName,
	createDt,
}: Partial<BoardType & UserType>) => {
	return (
		<WriterWrap>
			<div>{displayName}</div>
			<div>{moment(createDt).format('YYYY-MM-DD')}</div>
		</WriterWrap>
	);
};

export default SummaryWriterView;

const WriterWrap = styled.div`
	display: flex;
	margin: 0.1em;

	& > div {
		padding: 0.2em;
	}
`;
