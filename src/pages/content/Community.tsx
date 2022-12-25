import { Routes, Route } from 'react-router-dom';
import Main from '@src/pages/Main';
import Form from '@components/Form';
import DetailView from '@components/DetailView';

const Community = () => {
	return (
		// 조건부 렌더링 실습 isLoading상태값에 따라 보여주는 React엘리먼트는 다름.
		<Routes>
			<Route path="/" element={<Main category="board" />}></Route>
			<Route path="/new" element={<Form category="board" />}></Route>
			<Route path="/:boardId" element={<DetailView />}></Route>
		</Routes>
	);
};
export default Community;
