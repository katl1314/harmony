import { ReactNodeType } from '@src/types/Types';
import styled from 'styled-components';

const Title = ({ children }: { children: ReactNodeType }) => {
	return <TitleWrap>{children}</TitleWrap>;
};

const TitleWrap = styled.h2`
	font-size: 1.2em;
	font-weight: bold;
`;

export default Title;
