import { Button } from '@src/components/button/Button';
import styled from 'styled-components';
const Gnb = () => {
	const say = () => {
		alert('헬로');
	};

	return (
		<NavWrap>
			<ul>
				<li>
					<Button onClick={say}>로그인</Button>
				</li>
				<li>
					<Button onClick={say}>회원가입</Button>
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
		}
	}
`;

export default Gnb;
