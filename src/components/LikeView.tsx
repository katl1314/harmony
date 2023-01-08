import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const LikeView = ({ nlike }: { nlike: number }) => {
	return (
		<LikeViewLayout>
			<ControllerItem>
				<AiOutlineUp size={15} />
			</ControllerItem>
			<ControllerItem>{nlike}</ControllerItem>
			<ControllerItem>
				<AiOutlineDown size={15} />
			</ControllerItem>
		</LikeViewLayout>
	);
};

const LikeViewLayout = styled.div`
	width: 130px;
	height: 70px;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
`;

const ControllerItem = styled.div`
	flex: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:not(:last-of-type) {
		border-bottom: 1px solid #e5e5e5;
	}
`;

export default LikeView;
