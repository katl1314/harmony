import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@src/App';
const UserBar = () => {
	const { uid, displayName, photoURL } = useContext(AppContext);
	// uid가 null이면 로그인, 회원가입 항목 표시,
	// uid가 null이 아니면 마이페이지 표시
	const LoginElement = !uid ? (
		<ul>
			<li>
				<NavLink to={'/login'}>로그인</NavLink>
			</li>
			<li>
				<NavLink to={'/join'}>회원가입</NavLink>
			</li>
		</ul>
	) : (
		<ProfileButton>
			<ProfileImage>
				{photoURL && displayName && (
					<img src={photoURL} alt={displayName} width={40} height={40} />
				)}
			</ProfileImage>
		</ProfileButton>
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
				& > a {
					display: inline-block;
					padding: 0 1em;
					box-sizing: border-box;
					border-radius: 30px;
					padding: 0.7em 1em;
				}

				&:first-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: #ffffff;
				}

				&:last-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: skyblue;
				}
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
				& > a {
					display: inline-block;
					padding: 0.5em 0.5em;
					border-radius: 30px;
					padding: 0.7em 1em;
				}

				&:first-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: #ffffff;
				}

				&:last-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: skyblue;
				}
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
			& > li {
				position: relative;
				padding: 0 0.5em;
				& > a {
					display: inline-block;
					padding: 0.5em 0.5em;
					border-radius: 30px;
				}

				&:first-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: #ffffff;
				}

				&:last-of-type > a {
					border: 1px solid #e5e5e5;
					background-color: skyblue;
				}
			}
		}
	}
`;

export default UserBar;
