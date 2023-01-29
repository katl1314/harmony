import { NavLink, useLocation, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
const Nav = () => {

	const location = useLocation(); // 현재 페이지의 URL정보를 반환하는 훅
	console.log(useMatch('/')); // 현재 페이지의 경로와 일치하는지 여부 검사
	console.log(location);
	return (
		<NavWrap>
			<MobileNavbar>
				<GiHamburgerMenu size={32} />
			</MobileNavbar>
			<StyleH1>
				<a href="/">harmony</a>
			</StyleH1>
			<ul>
				<li>
					<NavLink to={'/'}>커뮤니티</NavLink>
				</li>
			</ul>
		</NavWrap>
	);
};

const StyleH1 = styled.h1`
	line-height: 50px;
	font-weight: 700;
	margin-left: 1em;
	font-size: 20px;
`;

const NavWrap = styled.nav`
	// PC
	@media screen and (min-width: 1024px) {
		display: flex;
		& > ul {
			display: flex;
			line-height: 50px;
			overflow: hidden;
			margin-left: 1em;
			& > li {
				position: relative;
				margin: 0 1px;
				padding: 0 0.5em;
				& > a {
					display: inline-block;
					text-decoration: none;
					font-size: 1.1em;
					padding: 0 1em;
					color: black;
					box-sizing: border-box;
				}

				& > a.active {
					color: #009ef7;
					border-radius: 10px;
				}
			}

			& > li::before {
				content: '';
				position: absolute;
				top: 15px;
				left: -2px;
				width: 1px;
				height: 20px;
				background-color: gray;
				opacity: 0.5;
			}
		}
	}
	// 테블릿
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		display: flex;
		& > ul {
			display: flex;
			line-height: 50px;
			overflow: hidden;
			margin-left: 1em;
			& > li {
				position: relative;
				margin: 0 1px;
				padding: 0 0.5em;
				& > a {
					display: inline-block;
					text-decoration: none;
					padding: 0 0.5em;
					font-size: 1em;
					color: black;
				}

				& > a.active {
					color: #009ef7;
					border-radius: 10px;
				}
			}

			& > li::before {
				content: '';
				position: absolute;
				top: 15px;
				left: -2px;
				width: 1px;
				height: 20px;
				background-color: gray;
				opacity: 0.5;
			}
		}
	}
	// 모바일
	@media screen and (max-width: 767px) {
		display: flex;
		align-items: center;
		margin: 0 0.5em;
		& > ul {
			display: none;
		}
	}
`;

const MobileNavbar = styled.div`
	// PC, 태블릿 => display none
	@media screen and (min-width: 768px) {
		display: none;
	}

	// 모바일
	@media screen and (max-width: 767px) {
		& > ul {
			display: block;
		}
	}
`;

export default Nav;
