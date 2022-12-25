import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const SummaryBody = ({
	title,
	boardId,
}: {
	title: string;
	boardId: number;
}) => {
	return (
		<BodyWrap>
			<NavLink key={boardId} to={`/${boardId}`}>
				{title}
			</NavLink>
		</BodyWrap>
	);
};

const BodyWrap = styled.div`
	display: flex;
	align-items: center;
	& > a {
		font-size: 1.2em;
		font-weight: bold;
		color: black;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& > a:hover {
		color: blue;
	}
`;

export default SummaryBody;
