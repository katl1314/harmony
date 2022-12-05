import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@src/App';
import SNavLink from '@components/SNavLink';
import { authService } from '@src/firebase.config';
import Button from '@components/Button';
const UserBar = () => {
	const { uid, displayName, photoURL } = useContext(AppContext);
	const handlerSignout = async () => {
		await authService.signOut();
		sessionStorage.removeItem('user');
		// 새로 고침
		// BOM의 최상위 객체는 window
		location.reload();
	};

	const LoginElement = !uid ? (
		<ul>
			<li>
				<SNavLink to="/login" background="white" borderradius={30} color="#000">
					로그인
				</SNavLink>
			</li>
			<li>
				<SNavLink
					to="/join"
					background="skyblue"
					borderradius={30}
					color="#000"
				>
					회원가입
				</SNavLink>
			</li>
		</ul>
	) : (
		<>
			<Button
				background="#fff"
				borderradius={10}
				color="#000"
				onClick={handlerSignout}
			>
				로그아웃
			</Button>
			<ProfileButton>
				<ProfileImage>
					{photoURL && displayName && (
						<img src={photoURL} alt={displayName} width={40} height={40} />
					)}
				</ProfileImage>
			</ProfileButton>
		</>
	);
	return <NavWrap>{LoginElement}</NavWrap>;
};

const ProfileButton = styled.button`
	background: rgb(255, 255, 255);
`;

const ProfileImage = styled.span`
	& > img {
		border-radius: 50%;
	}
`;

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
				padding: 0 0.5em;
			}
		}
	}
	// 테블릿
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		display: flex;
		& > ul {
			display: flex;
			overflow: hidden;
			margin-left: 1em;
			align-items: center;
			& > li {
				position: relative;
				padding: 0 0.5em;
			}
		}
	}

	// 모바일
	@media screen and (max-width: 767px) {
		display: flex;
		& > ul {
			display: flex;
			overflow: hidden;
			margin-left: 1em;
			align-items: center;
		}
	}
`;

export default UserBar;
