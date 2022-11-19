import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface PageInterface {
	totalCnt: number;
	limitCount: number;
	currentPage: number;
	onPageClick: (index: number) => void;
}

export const Page = ({
	totalCnt,
	limitCount,
	currentPage,
	onPageClick,
}: PageInterface) => {
	const pageTotal =
		totalCnt % limitCount
			? Math.ceil(totalCnt / limitCount)
			: totalCnt / limitCount;
	const pageArray = new Array(pageTotal);
	pageArray.fill(null);

	const pageRef = useRef<HTMLDivElement>(null);

	const handlerPageClick = (index: number) => {
		onPageClick(index);
	};

	useEffect(() => {
		const pageUl = pageRef.current;
		const pageLi = pageUl?.childNodes as NodeListOf<HTMLDivElement>;

		if (pageLi) {
			// page-active클래스를 가진 요소를 초기화.
			[...pageLi].forEach((el) => el.classList.remove('page-active'));
			const targetPageLi = pageLi[currentPage] as HTMLElement;
			targetPageLi.classList.add('page-active');
		}
	}, [currentPage]);

	const pageUl = pageArray.map((_, index) => {
		return (
			<div
				key={`page_${index + 1}`}
				onClick={() => {
					handlerPageClick(index);
				}}
			>
				{index + 1}
			</div>
		);
	});

	return <PageWrap ref={pageRef}>{pageUl}</PageWrap>;
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
