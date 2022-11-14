import { H2 } from '@src/components/fonts/Font';
import { Section } from '@src/styles/content';
import { useEffect, useState } from 'react';
import { UserFactory } from '@src/services/UserService';
import { UserType } from '@src/types/UserType';
const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		// db의 내용 조회함.
		const userFactory = new UserFactory();
		userFactory
			.createService('post')
			?.fetch('http://127.0.0.1:8080/api/user/', {
				header: { 'Content-Type': 'application/json' },
				params: {
					firstIndexSB: 0,
					limitCountSB: 10,
				},
			})
			.then(({ data: { responseData, totalCnt } }) => setUserList(responseData))
			.catch((error) => console.error(error));
	}, []);

	return (
		<Section>
			<H2>Community</H2>
			<Content datas={userList} />
		</Section>
	);
};

const Content = ({ datas }: { datas: Array<UserType> }) => {
	const userList = datas.map(
		({ name, id, email, timestamp }: UserType, i: number) => (
			<div key={`${id}_${i}`}>
				<div>이름 : {name}</div>
				<div>이메일 : {email}</div>
				<div>가입날짜 : {new Date(timestamp).toLocaleDateString()}</div>
			</div>
		)
	);
	return <div>{userList}</div>;
};

export default Community;
