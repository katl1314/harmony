import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@src/App';
import CustomNavLink from '@components/CustomNavLink';
import Profile from '@src/components/Profile/Profile';
const UserBar = () => {
	const { uid, displayName, photoURL } = useContext(AppContext);

	const LoginElement = !uid ? (
		<CustomNavLink
			to="/login"
			background="white"
			borderradius={30}
			color="#000"
		>
			로그인
		</CustomNavLink>
	) : (
		<Profile photoURL={photoURL} displayName={displayName}></Profile>
	);
	return <NavWrap>{LoginElement}</NavWrap>;
};

const NavWrap = styled.nav`
	// PC
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
		& > ul {
			display: flex;
			overflow: hidden;
			& > li {
				position: relative;
				padding: 0 0.1em;
			}
		}
	}
	// 테블릿
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		display: flex;
		align-items: center;
		& > ul {
			display: flex;
			overflow: hidden;
			margin-left: 1em;
			align-items: center;
			& > li {
				position: relative;
				padding: 0 0.1em;
			}
		}
	}

	// 모바일
	@media screen and (max-width: 767px) {
		display: flex;
		align-items: center;
		& > ul {
			display: flex;
			overflow: hidden;
			margin-left: 1em;
			align-items: center;
		}
	}
`;

export default UserBar;
