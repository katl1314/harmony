import Community from '@src/pages/content/Community';
import Qna from '@src/pages/content/Qna';
import JobCafe from '@src/pages/content/JobCafe';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
	return (
		<main>
			<Routes>
				<Route path="/community" element={<Community />}></Route>
				<Route path="/qna" element={<Qna />}></Route>
				<Route path="/jobcafe" element={<JobCafe />}></Route>
			</Routes>
		</main>
	);
};

export default Content;
