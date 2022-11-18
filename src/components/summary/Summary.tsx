import { ReactNode } from 'react';
import styled from 'styled-components';

const Summary = ({ children }: { children: ReactNode }) => {
	return <SummaryWrap>{children}</SummaryWrap>;
};

const SummaryWrap = styled.div`
	margin: auto 0;
	& > div {
		padding: 5px;
	}
`;

export default Summary;
