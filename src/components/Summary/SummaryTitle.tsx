import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const SummaryTitle = ({
	title,
	boardId,
}: {
	title: string;
	boardId: string;
}) => {
	return (
		<Title>
			<NavLink key={boardId} to={`/${boardId}`}>
				{title}
			</NavLink>
		</Title>
	);
};

const Title = styled.div`
	/* 두 줄 이상 ellipsis(말줄임)기능 */
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	& > a {
		font-size: 1.2em;
		font-weight: bold;
	}
`;

export default SummaryTitle;
