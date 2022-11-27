import Community from '@src/pages/content/Community';
import Qna from '@src/pages/content/Qna';
import JobCafe from '@src/pages/content/JobCafe';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from '@src/pages/Login';

const Content = () => {
	// react-router-dom6은 기존 v5버전과 다르게 Switch -> Routes으로 변경됨
	// v5에서는 exact을 추가하여 복수의 라우팅을 방지하였음 ex) / or /home을 동시에 보여주는 것을 방지
	// 특정 url에 해당하는 컴포넌트를 element을 통해 설정함.
	return (
		<Main>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/community" element={<Community />}></Route>
				<Route path="/qna" element={<Qna />}></Route>
				<Route path="/jobcafe" element={<JobCafe />}></Route>
			</Routes>
		</Main>
	);
};

const Main = styled.main`
	width: 80%;
	margin: 2em auto;
`;

export default Content;
