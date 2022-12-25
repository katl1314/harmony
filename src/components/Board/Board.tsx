import { ReactNodeType } from '@src/types/Types';
import styled from 'styled-components';

const Board = ({ children }: { children: ReactNodeType }) => {
	return <BoardWrap>{children}</BoardWrap>;
};

const BoardWrap = styled.div`
	@media screen and (min-width: 1024px) {
		width: 60%;
	}

	@media screen and (max-width: 1023px) {
		width: 100%;
	}
`;

export default Board;
