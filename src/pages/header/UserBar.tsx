import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UserBar = () => {
	return (
		<NavWrap>
			<ul>
				<li>
					<NavLink to={'/login'}>로그인</NavLink>
				</li>
				<li>
					<NavLink to={'/join'}>회원가입</NavLink>
				</li>
			</ul>
		</NavWrap>
	);
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
			}
		}
	}
`;

export default UserBar;
