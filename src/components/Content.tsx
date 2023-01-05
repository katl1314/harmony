import { BoardType, UserType } from '@src/types/Types';
import styled from 'styled-components';
import Summary from '@components/Summary';
import SummaryBody from '@components/Summary/SummaryBody';
import ProfileImage from '@components/Profile/ProfileImage';
import ProfileInfo from '@components/Summary/ProfileInfo';
import SummaryFooter from '@components/Summary/SummaryFooter';
import CategoryView from '@components/Summary/CategoryView';
import LikeView from '@components/Summary/LikeView';
const Content = ({ data }: { data: Array<BoardType & UserType> }) => {
	const BoardList = data.map((d: BoardType & UserType) => {
		return (
			<Summary key={`${d.boardId}`}>
				<SummaryHeader>
					<ProfileImage
						displayName={d.displayName}
						photoURL={d.photoURL}
						width={20}
						height={20}
					/>
					<ProfileInfo displayName={d.displayName} createDt={d.createDt} />
				</SummaryHeader>
				<SummaryBody title={d.title} boardId={d.boardId} />
				<SummaryFooter>
					<CategoryView category={d.category} />
					<LikeView like={d.nlike} />
				</SummaryFooter>
			</Summary>
		);
	});
	return <div>{BoardList}</div>;
};

const SummaryHeader = styled.div`
	display: grid;
	grid-template-columns: 3% 97%;
	grid-template-rows: 20px;
	// PC
	@media screen and (max-width: 767px) {
		gap: 10px;
	}
`;

export default Content;
