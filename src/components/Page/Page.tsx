import { memo, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageInfoSelector } from '@src/atoms/atoms';

export interface IPage {
	pageChangeEvent: (page: number) => void;
	pages: number;
	currentPage: number;
	count?: number;
	firstPage?: number;
}

const Page = memo(
	({ pageChangeEvent, pages, currentPage, count = 10 }: IPage) => {
		const [firstPage, setFirstPage] = useState(1);
		const [_, setPageSelector] = useRecoilState(pageInfoSelector);

		useEffect(() => {
			setPageSelector({
				pageChangeEvent,
				pages,
				currentPage,
				firstPage,
				count,
			});
		}, [currentPage]);

		const handlerPrevPage = useCallback(() => {
			if (firstPage <= 1) {
				return;
			}
			setFirstPage(firstPage - count);
			pageChangeEvent(firstPage - count);
		}, [count, firstPage]);

		const handlerNextPage = useCallback(() => {
			if (firstPage + count > pages) {
				return;
			}
			setFirstPage(firstPage + count);
			pageChangeEvent(firstPage + count);
		}, [count, firstPage]);

		return (
			<PageLayout>
				<PageButton onClick={handlerPrevPage}>이전</PageButton>
				<PageList />
				<PageButton onClick={handlerNextPage}>다음</PageButton>
			</PageLayout>
		);
	}
);

// 페이지 UI
const PageList = () => {
	const [pageSelector] = useRecoilState(pageInfoSelector);
	const firstPage = pageSelector?.firstPage ?? 0;
	const pages = pageSelector?.pages ?? 0;
	const count = pageSelector?.count ?? 0;

	const displayCount: number =
		pages < count
			? pages
			: firstPage + count > pages
			? pages - firstPage + 1
			: count;

	return (
		<PageItems>
			<PageItem displayCount={displayCount} />
		</PageItems>
	);
};

const PageItem = ({ displayCount }: { displayCount: number }) => {
	const [pageSelector] = useRecoilState(pageInfoSelector);
	const firstPage = pageSelector?.firstPage ?? 0;
	const currentPage = pageSelector?.currentPage ?? 0;
	const pageChangeEvent = pageSelector?.pageChangeEvent;
	return (
		<>
			{Array(displayCount)
				.fill(null)
				.map((_, i) => {
					const page = i + firstPage;
					return (
						<PageButton
							key={`page_${page}`}
							onClick={pageChangeEvent?.bind(null, page)}
							className={page === currentPage ? 'active' : ''}
						>
							{page}
						</PageButton>
					);
				})}
		</>
	);
};

const PageLayout = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
	align-items: center;
	margin-top: 1rem;
	justify-content: center;
`;

const PageItems = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const PageButton = styled.button`
	text-align: center;
	background-color: #ffffff;
	font-size: 1rem;
	padding: 6px 10px;
	line-height: 18px;
	cursor: pointer;

	&.active {
		color: rgb(11, 127, 211);
	}
`;

export default Page;
