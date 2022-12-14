import Controller from '@components/Controller';
import Board from '@components/Board/Board';
import CustomNavLink from '@components/CustomNavLink';
import View from '@components/View';
import Content from '@components/Content';
import Page from '@components/Page/Page';
import { usePage } from '@src/hooks/usePage';
import { useEffect } from 'react';

const Main = ({ category }: { category: string }) => {
	const [data, refetch, setPageChange] = usePage(1, category);
	const totalCnt = data?.totalCnt;
	const currentPage = data?.offset;
	const responseData = data?.responseData;

	useEffect(() => {
		// 서버의 데이터가 갱신되면 refetch한다.
		refetch();
	}, [responseData]);
	// 페이지 체인지 이벤트
	const fnPageChange = (page: number) => {
		setPageChange(page);
	};
	return (
		<Board>
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
				<Content data={responseData} />
				<Page
					pageChangeEvent={fnPageChange}
					totalCnt={totalCnt}
					currentPage={currentPage}
				/>
			</View>
		</Board>
	);
};

export default Main;
