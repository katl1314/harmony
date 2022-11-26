import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {
	return (
		<NavWrap>
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
			& > li {
				position: relative;
				margin: 0 1px;
				& > a {
					display: inline-block;
					text-decoration: none;
					padding: 0 30px;
					font-size: 1.1em;
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
				top: 13px;
				left: -2px;
				width: 1px;
				height: 23px;
				background-color: gray;
				opacity: 0.5;
			}
		}
	}
	// 테블릿
	@media screen and (min-width:768px) and (max-width: 1023px) {
		display: flex;
		& > ul {
			display: flex;
			line-height: 50px;
			overflow: hidden;
			& > li {
				position: relative;
				margin: 0 1px;
				& > a {
					display: inline-block;
					text-decoration: none;
					padding: 0 30px;
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
				top: 13px;
				left: -2px;
				width: 1px;
				height: 23px;
				background-color: gray;
				opacity: 0.5;
			}
		}
	}
	// 모바일
	@media screen and (max-width: 767px) {
		min-width: 100%;
	}
`;

export default Nav;
