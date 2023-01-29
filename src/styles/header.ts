import styled from 'styled-components';

export const HeaderWrap = styled.header`
	padding: 0.5em;
	border-bottom: 1px solid #e5e5e5;
	position: fixed;
	z-index: 9999;
	width: 100%;
	top: 0;
	background-color: #fff;
`;

export const HeaderContainer = styled.div`
	// PC
	@media screen and (min-width: 1024px) {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	// 태블릿
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	// 모바일
	@media screen and (max-width: 767px) {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
`;
