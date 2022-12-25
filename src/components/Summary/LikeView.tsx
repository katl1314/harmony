import { BiLike } from 'react-icons/bi';
import styled from 'styled-components';

const LikeView = ({ like }: { like: number }) => {
	return (
		<LikeViewWrap>
			<BiLike size={20} />
			<span>{like}</span>
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

export default LikeView;
