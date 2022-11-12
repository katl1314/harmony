import Logo from '@src/pages/header/Logo';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {
	return (
		<NavWrap>
			<Logo />
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
	display: flex;
	& > ul {
		display: flex;
		line-height: 35px;
		margin-left: 50px;
		overflow: hidden;
		& > li {
			position: relative;
			& > a {
				text-decoration: none;
				padding: 0 30px;
				font-size: 1.1em;
				color: black;
			}
		}

		& > li::before {
			content: '';
			position: absolute;
			top: 5px;
			left: -1px;
			width: 1px;
			height: 25px;
			background-color: gray;
			opacity: 0.5;
		}
	}
`;

export default Nav;
