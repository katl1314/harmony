import { ReactNodeType } from '@src/types/Types';
import { BiLike } from 'react-icons/bi';
import styled from 'styled-components';

const SummaryLikeView = ({ children }: { children: ReactNodeType }) => {
	return (
		<LikeViewWrap>
			<BiLike size={20} />
			<span>{children}</span>
		</LikeViewWrap>
	);
};

const LikeViewWrap = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	& > span {
		display: inline-block;
		font-size: 0.9em;
	}
`;

export default SummaryLikeView;
