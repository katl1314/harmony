import { useEffect, useRef, createContext, useContext } from 'react';
import styled from 'styled-components';

interface PageInterface {
	totalCnt: number;
	limitCount: number;
	currentPage: number;
	onPageClick: (index: number) => void;
}

const PageContext = createContext({
	limitCount: 0,
	currentPage: 0,
	onPageClick: (index: number) => {},
});

const Page = ({
	totalCnt,
	limitCount,
	currentPage,
	onPageClick,
}: PageInterface) => {
	const pageTotal =
		totalCnt % limitCount
			? Math.ceil(totalCnt / limitCount)
			: totalCnt / limitCount;

	return (
		<PageContext.Provider value={{ limitCount, currentPage, onPageClick }}>
			<PageWrap>
				<PagePrevious />
				<PageList pageTotal={pageTotal} />
				<PageNext />
			</PageWrap>
		</PageContext.Provider>
	);
};

const PagePrevious = () => {
	const { currentPage, onPageClick } = useContext(PageContext);
	const pageClickPrevious = () => {
		onPageClick(currentPage - 1);
	};
	return <div onClick={pageClickPrevious}>이전</div>;
};

const PageNext = () => {
	const { currentPage, onPageClick } = useContext(PageContext);
	const pageClickPrevious = () => {
		onPageClick(currentPage + 1);
	};
	return <div onClick={pageClickPrevious}>다음</div>;
};

const PageList = ({ pageTotal }: { pageTotal: number }) => {
	const { currentPage, onPageClick, limitCount } = useContext(PageContext);
	const handlerPageClick = (index: number) => {
		onPageClick(index);
	};
	const pageRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const pageUl = pageRef.current;
		const pageLi = pageUl?.childNodes as NodeListOf<HTMLElement>;

		if (pageLi) {
			// page-active클래스를 가진 요소를 초기화.
			[...pageLi].forEach((el) => el.classList.remove('page-active'));
			const targetPageLi = pageLi[0] as HTMLElement;
			targetPageLi.classList.add('page-active');
		}
	}, [currentPage]);

	const pageArray = new Array(
		Math.floor(pageTotal < limitCount ? 1 : pageTotal / 2)
	);
	pageArray.fill(null);

	const pageClick = (index: number) => {
		if (currentPage === currentPage + index) {
			return;
		}
		handlerPageClick(currentPage + index);
	};

	const pageUl = pageArray.map((_, index) => {
		return (
			<li key={`page_${index + 1}`} onClick={pageClick.bind(this, index)}>
				{currentPage + index + 1}
			</li>
		);
	});

	return <PageListWrap ref={pageRef}>{pageUl}</PageListWrap>;
};

const PageWrap = styled.div`
	display: flex;
	justify-content: center;
	& > div {
		padding: 0 0.5em;
		font-size: 1.2em;
		cursor: pointer;
	}
`;

const PageListWrap = styled.ul`
	display: flex;

	& > li {
		padding: 0 0.5em;
		font-size: 1.2em;
		cursor: pointer;
	}
`;

export default Page;
