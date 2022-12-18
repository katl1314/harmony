import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '@src/pages/Main';
import CustomNavLink from '@components/CustomNavLink';
import Form from '@components/Form';
import DetailView from '@components/DetailView';
import { usePage } from '@src/hooks/usePage';

const Community = () => {
	const [data, isFetching, setPageChange] = usePage(0);
	const totalCnt = data?.data?.totalCnt;
	const responseData = data?.data?.responseData;
	const Content = isFetching || (
		<Main totalCnt={totalCnt} boardList={responseData}>
			<CustomNavLink
				to="/new"
				background="rgb(11,127,211)"
				color="#fff"
				borderradius={5}
			>
				등록하기
			</CustomNavLink>
		</Main>
	);

	return (
		// 조건부 렌더링 실습 isLoading상태값에 따라 보여주는 React엘리먼트는 다름.
		<Fragment>
			<Routes>
				<Route path="/" element={Content}></Route>
				<Route path="/new" element={<Form category="community" />}></Route>
				<Route
					path="/:boardId"
					element={<DetailView data={responseData} />}
				></Route>
			</Routes>
		</Fragment>
	);
};
export default Community;
