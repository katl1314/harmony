import useDetail from '@src/hooks/useDetail';
import { Dates } from '@src/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LikeView from './LikeView';
import ProfileImage from './Profile/ProfileImage';

const DetailView = () => {
	// 상위 경로의 파라미터를 하위 경로에서 받을 수 있음.
	const params = useParams();
	const boardId: number = Number(params.boardId);

	const [state] = useDetail(boardId);

	const { photoURL, displayName, title, createDt, content, nlike } = state;

	return (
		<DetailLayout>
			<DetailHeader>
				<ProfileImage photoURL={photoURL} displayName={displayName} />
				<ProfileView>
					<NameView>{displayName}</NameView>
					<DateView>{Dates.fromNow(new Date(createDt), 'yyyy-mm-dd')}</DateView>
				</ProfileView>
			</DetailHeader>
			<TitleView>{title}</TitleView>
			<ContentView>{content}</ContentView>
			<LikeView nlike={nlike} />
		</DetailLayout>
	);
};

const ContentView = ({ children }: any) => {
	// 줄 바꿈 여부 체크
	const content: string = children as string;
	const isLineBreaking = /\n/.test(content);

	const convertContent = () => {
		const htPanels = content
			.split(/\n/)
			.map((text, index) => <p key={index}>{text}</p>);
		return <>{htPanels}</>;
	};

	return (
		<ContentLayout>
			{!isLineBreaking ? <p>{content}</p> : convertContent()}
		</ContentLayout>
	);
};

const DetailLayout = styled.div`
	width: 80%;
	margin: 1rem;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;
const DetailHeader = styled.div`
	display: flex;
	margin-bottom: 30px;
`;
const ProfileView = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
`;
const NameView = styled.div`
	font-size: 1rem;
`;
const DateView = styled.div`
	font-size: 1rem;
`;
const TitleView = styled.h1`
	font-size: 2rem;
	font-weight: bold;
`;
const ContentLayout = styled.div`
	margin: 30px 0;

	& > p {
		margin: 0.8rem 0;
	}
`;
export default DetailView;
