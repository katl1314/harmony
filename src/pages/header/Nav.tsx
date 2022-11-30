import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
	return (
		<NavWrap>
			<MobileNavbar>
				<GiHamburgerMenu size={32} />
			</MobileNavbar>
			<h1
				style={{
					lineHeight: '50px',
					fontSize: '20px',
					fontWeight: 700,
					marginLeft: '1em',
				}}
			>
				<a href="/">harmony</a>
			</h1>
			<ul>
				<li>
					<NavLink to={'/community'}>커뮤니티</NavLink>
				</li>
				<li>
					<NavLink to={'/qna'}>Q&A</NavLink>
				</li>
				<li>
					<NavLink to={'/jobcafe'}>Job Cafe</NavLink>
				</li>
			</ul>
		</NavWrap>
	);
};

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
					background-color: #f4f6fa;
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
					background-color: #f4f6fa;
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
