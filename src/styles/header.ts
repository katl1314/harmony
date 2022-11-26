import styled from 'styled-components';

export const HeaderWrap = styled.header`
	padding: 0.5em;
	border-bottom: 1px solid #e5e5e5;
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
	@media screen {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
`;
