import styled from 'styled-components';
import { BoardType, UserType } from '@src/types/Types';
import { Summary } from './Summary';
import ProfileImage from '@components/Profile/ProfileImage';
import ProfileInfo from '@components/Summary/ProfileInfo';
const SummaryView = ({
	data: { boardId, displayName, photoURL, createDt, title, category, nlike },
}: {
	data: BoardType & UserType;
}) => {
	return (
		<SummaryMain key={`${boardId}`}>
			<Summary.Header>
				<ProfileImage
					displayName={displayName}
					photoURL={photoURL}
					width={20}
					height={20}
				/>
				<ProfileInfo displayName={displayName} createDt={createDt} />
			</Summary.Header>
			<Summary.Body title={title} boardId={boardId} />
			<Summary.Footer>
				<Summary.CategoryView>{category}</Summary.CategoryView>
				<Summary.LikeView>{nlike}</Summary.LikeView>
			</Summary.Footer>
		</SummaryMain>
	);
};

const SummaryMain = styled.div`
	margin: auto 0;
	height: 70px;
	display: flex; /* flex속성 사용 (1차원 요소 배치) */
	flex-direction: column; /* flex item요소 세로로 배치 */
	padding: 1rem;

	// div첫번째 요소에는 상단에 border 추가
	&:first-of-type {
		border-top: 1px solid #e5e5e5;
	}

	// div마지막 요소에는 하단에 border 추가
	&:last-of-type {
		border-bottom: 1px solid #e5e5e5;
	}

	// div가 첫번째 또는 마지막이 아닌 요소는 하단에 border 추가
	&:not(:last-of-type),
	&:not(:first-of-type) {
		border-bottom: 1px solid #e5e5e5;
	}

	/* 
		flex-grow속성을 사용하기 위해서는 래퍼 요소에 높이, 너비가 설정되어야함.
		상위요소의 높이에 따라 차지하는 비율을 설정할 수 있음.
	*/
	& > div:nth-of-type(1) {
		flex-grow: 1;
	}

	& > div:nth-of-type(2) {
		flex-grow: 3;
	}

	& > div:nth-of-type(3) {
		flex-grow: 1;
	}
`;

export default SummaryView;
