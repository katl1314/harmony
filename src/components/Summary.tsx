import { ReactNodeType } from '@src/types/Types';
import styled from 'styled-components';

const Summary = ({ children }: { children: ReactNodeType }) => {
	return <SummaryWrap>{children}</SummaryWrap>;
};

const SummaryWrap = styled.div`
	margin: auto 0;
	width: 100%;
`;

export default Summary;
