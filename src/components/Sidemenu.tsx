import styled from 'styled-components';

const Sidemenu = () => {
	return <SideMenuWrap></SideMenuWrap>;
};

const SideMenuWrap = styled.div`
	width: 20%;
	height: 100vh;
	background-color: red;
	display: none;
	@media screen and (min-width: 1024px) {
		display: block;
	}
`;

export default Sidemenu;
