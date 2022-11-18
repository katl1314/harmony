import { H2 } from '@src/components/fonts/Font';
import { Section } from '@src/styles/content';
import { useEffect, useState } from 'react';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { UserType } from '@src/types/UserType';
import Vote from '@src/components/vote/Vote';
import styled from 'styled-components';
import Summary from '@src/components/summary/Summary';

const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		// db의 내용 조회함.
		const url = 'http://127.0.0.1:8080/api/user/';
		const config = {
			header: { 'Content-Type': 'application/json' },
			params: {
				firstIndexSB: 0,
				limitCountSB: 10,
			},
		};

		// event binding
		let status = false;
		const scrollEvent = () => {
			// status가 false일때만 이벤트 처리함.
			if (!status) {
				status = true;
				setTimeout(() => {
					console.log('스크롤이 이동한다');
					status = false;
				}, 100);
			}
		};
		// 중첩 객체가 없을 경우 안전하게 접근하도록 ?.(옵셔널 체이닝)을 사용함.
		ServiceFactory.AxiosService?.post(url, config)
			.then(({ data: { responseData, totalCnt } }) => setUserList(responseData))
			.catch((error) => console.error(error));

		document.addEventListener('scroll', scrollEvent);
		return () => {
			// cleanup method (컴포넌트 언마운트(더이상 사용하지 않을때)시 호출함.)
			// event unbinding
			document.removeEventListener('scroll', scrollEvent);
		};
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
		({ name, id, email, timestamp }: UserType, i: number) => {
			const summaryContent = (
				<>
					<div>이름 : {name}</div>
					<div>이메일 : {email}</div>
					<div>가입날짜 : {new Date(timestamp).toLocaleDateString()}</div>
				</>
			);

			return (
				<ContentWrap key={`${id}_${i}`}>
					<Vote />
					<Summary children={summaryContent} />
				</ContentWrap>
			);
		}
	);
	return <div>{userList}</div>;
};

const ContentWrap = styled.div`
	padding: 10px;
	border: 1px solid;
	margin: 10px;
	display: flex;
`;

export default Community;
