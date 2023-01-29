import Controller from '@components/Controller';
import CustomNavLink from '@components/CustomNavLink';
import View from '@components/View';
import Content from '@src/components/Content';
import Page from '@src/components/Page/Page';
import { useFetch } from '@src/hooks/useFetch';
import { useEffect } from 'react';
import styled from 'styled-components';

const Main = ({ category }: { category: string }) => {
	const [data, refetch] = useFetch(category);
	const totalCnt = data?.totalCnt;
	const pages = data?.pages;
	const responseData = data?.responseData;

	useEffect(() => {
		// 서버의 데이터가 갱신되면 refetch한다.
		refetch();
	}, [responseData]);

	return (
		<ViewLayout>
			<Controller>
				<CustomNavLink
					to="/new"
					background="rgb(11,127,211)"
					color="#fff"
					borderradius={5}
				>
					등록하기
				</CustomNavLink>
			</Controller>
			<View totalCnt={totalCnt}>
				<Board
					data={responseData}
					totalCnt={totalCnt}
					pages={pages}
					count={5}
					emptyMessage={'게시물이 없습니다.'}
				/>
			</View>
		</ViewLayout>
	);
};

const Board = ({
	data,
	totalCnt,
	pages,
	count,
	emptyMessage,
}: {
	data: any[];
	totalCnt: number;
	pages: number;
	count: number;
	emptyMessage: string;
}) => {
	return (
		<>
			{totalCnt > 0 ? (
				<Content data={data} />
			) : (
				<EmptyMessage>{emptyMessage}</EmptyMessage>
			)}
			<Page pages={pages} count={count} />
		</>
	);
};

const EmptyMessage = ({ children }: { children: string }) => {
	return <p>{children}</p>;
};

const ViewLayout = styled.div`
	width: 80%;
	margin: 1rem;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

export default Main;
