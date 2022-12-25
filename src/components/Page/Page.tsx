import { memo, useContext, createContext } from 'react';
import styled from 'styled-components';

interface IPage {
	pageChangeEvent: (page: number) => void;
	totalCnt: number;
	currentPage: number;
}

export const PageContext = createContext<IPage | null>(null);

const Page = memo(({ pageChangeEvent, totalCnt, currentPage }: IPage) => {
	// Page UI는 totalCnt가 undefined일때 의미가 없기 때문에 undefined에 대한 분기 처리가 필요함.
	return (
		<PageContext.Provider value={{ pageChangeEvent, totalCnt, currentPage }}>
			<PageController>
				<PagePrevButton />
				<PageList />
				<PageNextButton />
			</PageController>
		</PageContext.Provider>
	);
});

// 이전 페이지
const PagePrevButton = () => {
	return <div>이전</div>;
};

// 다음 페이지
const PageNextButton = () => {
	return <div>다음</div>;
};

// 페이지 UI
const PageList = ({}) => {
	const pageContext = useContext(PageContext);
	const totalCnt = pageContext?.totalCnt; // 게시글 총 개수
	const currentPage = pageContext?.currentPage; // 현재 선택된 페이지
	const pageChangeEvent = pageContext?.pageChangeEvent; // 페이지 변경 이벤트
	if (totalCnt) {
		const pages = !!(totalCnt % 10)
			? Math.floor(totalCnt / 10) + 1
			: Math.floor(totalCnt / 10);
		const pageItem = new Array(pages < 5 ? pages : 5).fill(null).map((d, i) => {
			const page = i + 1;
			return (
				<PageItem
					key={`page_${page}`}
					id={`${page}`}
					data-active={currentPage == page}
					onClick={pageChangeEvent?.bind(null, page)}
				>
					{i + 1}
				</PageItem>
			);
		});
		return <PageItems>{pageItem}</PageItems>;
	}
	return <></>;
};

const PageController = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
	align-items: center;
	margin: 5px;
	/* gap : flex item간 간격 */
	gap: 1rem;
`;

const PageItems = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const PageItem = styled.div`
	/*
	부모 요소에 display flex가 적용되어 있을때
	flex-basis속성을 사용하면 flex 아이템의 기본 크기를 지정함.
	다만 width와 비슷하다고 생각이 들음.
	차이점
	1. flex-direction 설정값에 따라서 달라짐
		column을 통해 수직 배치 할 경우 눈에 보이게 달라짐.
	2. flex 아이템이 설정된 너비보다 큰 컨텐츠가 들어올 경우
	  flex-basis을 설정하게 되면 컨텐츠의 크기만큼 차지함.(유연함.)
	3. 우선순위 : flex-basis > width
	 */
	flex-basis: 20px;
	width: 20px;
	text-align: center;
	color: ${(prop: any) => prop['data-active'] && 'rgb(11,127,211)'};
	font-weight: 700;
	cursor: pointer;
`;

export default Page;
