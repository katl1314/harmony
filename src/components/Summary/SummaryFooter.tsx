import { ReactNodeType } from '@src/types/Types';
import styled from 'styled-components';

const SummaryFooter = ({ children }: { children: ReactNodeType }) => {
	return <FooterWrap>{children}</FooterWrap>;
};

const FooterWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default SummaryFooter;
