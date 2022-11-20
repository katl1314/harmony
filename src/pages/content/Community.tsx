import { H2 } from '@src/components/fonts/Font';
import { Section } from '@src/styles/content';
import { useEffect, useState, createContext } from 'react';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { UserType } from '@src/types/UserType';
import styled from 'styled-components';
import Summary from '@src/components/summary/Summary';
import { Page } from '@src/components/page/Page';
import moment from 'moment';

const Community = () => {
	// 컴포넌트 렌더링 이후 실행함.
	const [userList, setUserList] = useState([]);
	const [totalCnt, setTotalCnt] = useState(0);
	const [firstIndexSB, setFirstIndexSB] = useState(0);
	const limitCountSB = 10;

	const handlerClick = (index: number) => {
		const pageTotal =
			totalCnt % limitCountSB
				? Math.ceil(totalCnt / limitCountSB)
				: totalCnt / limitCountSB;
		if (index < 0) {
			return;
		}
		if (index > pageTotal) {
			return;
		}
		setFirstIndexSB(index * limitCountSB);
	};

	useEffect(() => {
		// db의 내용 조회함.
		const url = 'http://127.0.0.1:8080/api/user/';
		const config = {
			header: { 'Content-Type': 'application/json' },
			params: {
				firstIndexSB,
				limitCountSB,
			},
		};

		// 중첩 객체가 없을 경우 안전하게 접근하도록 ?.(옵셔널 체이닝)을 사용함.
		ServiceFactory.AxiosService?.post(url, config)
			.then(({ data: { responseData, totalCnt } }) => {
				setUserList(responseData);
				setTotalCnt(totalCnt);
			})
			.catch((error) => console.error(error));
	}, [firstIndexSB]);
	console.log(totalCnt);
	return (
		<Section>
			<H2>Community</H2>
			{totalCnt > 0 ? (
				<>
					<Content datas={userList} />
					<Page
						totalCnt={totalCnt}
						limitCount={limitCountSB}
						currentPage={firstIndexSB / limitCountSB}
						onPageClick={handlerClick}
					/>
				</>
			) : (
				<div>Loading...</div>
			)}
		</Section>
	);
};

const Content = ({ datas }: { datas: Array<UserType> }) => {
	const userList = datas.map(({ id, timestamp }: UserType, i: number) => {
		const summaryContent = (
			<>
				<div>아이디 : {id}</div>
				<div>
					가입날짜 : {moment(new Date(timestamp)).format('yyyy-MM-DD HH:mm:ss')}
				</div>
			</>
		);

		return (
			<ContentWrap key={`${id}_${i}`}>
				<Summary children={summaryContent} />
			</ContentWrap>
		);
	});
	return <div>{userList}</div>;
};

const ContentWrap = styled.div`
	display: flex;
	margin: 1vh;
	border-bottom: 1px solid;
`;

export default Community;
