import { memo, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageInfoSelector } from '@src/atoms/atoms';

export interface IPage {
	pages: number;
	count?: number;
	currentPage?: number;
	firstPage?: number;
}

const Page = memo(({ pages, count = 10 }: IPage) => {
	const [pageState, setPage] = useRecoilState(pageInfoSelector);
	const firstPage = pageState?.firstPage ?? pageState?.currentPage;
	useEffect(() => {
		setPage({ ...pageState, pages, count });
	}, []);

	const handlerPrevPage = () => {
		if (firstPage <= 1) {
			return;
		}
		setPage({
			...pageState,
			currentPage: firstPage - count,
			firstPage: firstPage - count,
		});
	};

	const handlerNextPage = () => {
		if (firstPage + count > pages) {
			return;
		}
		setPage({
			...pageState,
			currentPage: firstPage + count,
			firstPage: firstPage + count,
		});
	};

	return (
		<PageLayout>
			<PageButton onClick={handlerPrevPage}>이전</PageButton>
			<PageList />
			<PageButton onClick={handlerNextPage}>다음</PageButton>
		</PageLayout>
	);
});

// 페이지 UI
const PageList = () => {
	const [pageState, setPage] = useRecoilState(pageInfoSelector);
	const currentPage = pageState?.currentPage ?? 0;
	const pages = pageState?.pages ?? 0;
	const count = pageState?.count ?? 0;
	const firstPage = pageState?.firstPage ?? 0;

	const displayCount: number =
		pages < count
			? pages
			: firstPage + count > pages
			? pages - firstPage + 1
			: count;

	const changePage = useCallback(
		(page: number) => {
			setPage({ ...pageState, currentPage: page });
		},
		[pageState]
	);

	return (
		<PageItems>
			{Array(displayCount)
				.fill(null)
				.map((_, i) => {
					const page = i + firstPage;
					return (
						<PageButton
							key={`page_${page}`}
							onClick={changePage.bind(null, page)}
							className={page === currentPage ? 'active' : ''}
						>
							{page}
						</PageButton>
					);
				})}
		</PageItems>
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
