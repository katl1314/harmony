import Community from '@src/pages/content/Community';
import Qna from '@src/pages/content/Qna';
import JobCafe from '@src/pages/content/JobCafe';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = () => {
	return (
		<Main>
			<Routes>
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
