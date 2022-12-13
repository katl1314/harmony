import { BoardType, UserType } from '@src/types/Types';
import styled from 'styled-components';
import Summary from '@components/Summary';
import SummaryTitle from '@components/Summary/SummaryTitle';
import ProfileImage from '@components/Profile/ProfileImage';
import SummaryWriterView from '@components/Summary/SummaryWriterView';
const Content = ({ datas }: { datas: Array<BoardType & UserType> }) => {
	const BoardList = datas.map((data: BoardType & UserType) => {
		return (
			<ContentWrap key={`${data.boardId}`}>
				<Summary>
					<SummaryContentWrap>
						<ProfileImage
							displayName={data.displayName}
							photoURL={data.photoURL}
							width={30}
							height={30}
						/>
						<SummaryWriterView
							displayName={data.displayName}
							createDt={data.createDt}
						/>
					</SummaryContentWrap>
					<SummaryTitle title={data.title} boardId={data.boardId} />
				</Summary>
			</ContentWrap>
		);
	});
	return <div>{BoardList}</div>;
};

const ContentWrap = styled.div`
	display: flex;
	border-bottom: 1px solid #e5e5e5;
`;

const SummaryContentWrap = styled.div`
	display: grid;
	grid-template-columns: 30px 100%;
	grid-template-rows: 50px;
	align-items: center;
`;

export default Content;
