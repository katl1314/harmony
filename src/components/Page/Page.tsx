import { memo, useContext, createContext, useState } from 'react';
import styled from 'styled-components';

interface IPage {
	pageChangeEvent: (page: number) => void;
	pages: number;
	currentPage: number;
}

export const PageContext = createContext<
	(IPage & { firstPage: number }) | null
>(null);

const Page = memo(({ pageChangeEvent, pages, currentPage }: IPage) => {
	// Page UI는 totalCnt가 undefined일때 의미가 없기 때문에 undefined에 대한 분기 처리가 필요함.
	const [firstPage, setFirstPage] = useState(1);

	const handlerPrevPage = () => {
		if (firstPage <= 1) {
			return;
		}
		setFirstPage(firstPage - 5);
		pageChangeEvent(firstPage - 5);
	};

	const handlerNextPage = () => {
		if (firstPage > pages) {
			return;
		}
		setFirstPage(firstPage + 5);
		pageChangeEvent(firstPage + 5);
	};

	return (
		<PageContext.Provider
			value={{ pageChangeEvent, pages, currentPage, firstPage }}
		>
			<PageLayout>
				<PageButton onClick={handlerPrevPage}>이전</PageButton>
				<PageList />
				<PageButton onClick={handlerNextPage}>다음</PageButton>
			</PageLayout>
		</PageContext.Provider>
	);
});

// 페이지 UI
const PageList = () => {
	const pageContext = useContext(PageContext);
	if (pageContext) {
		const currentPage = pageContext.currentPage;
		const firstPage = pageContext.firstPage;
		const pageChangeEvent = pageContext.pageChangeEvent;

		const pageItem = Array(5)
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
			});
		return <PageItems>{pageItem}</PageItems>;
	}
	return <></>;
};

const PageLayout = styled.div`
	display: flex;
	height: 30px;
	line-height: 30px;
	align-items: center;
	/* gap : flex item간 간격 */
	gap: 1rem;
	margin-top: 1rem;
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
