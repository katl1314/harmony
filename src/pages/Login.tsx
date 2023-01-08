import Button from '@components/Button';
import styled from 'styled-components';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { AuthServiceType } from '@src/types/Types';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	// react-router-dom v5, useHistory를 대체한 Hook으로, 리액트에서 url을 변경하기 위한 기능을 담당.
	const navigation = useNavigate();
	// react-router-dom v6에서 현재 url의 정보를 반환하는 Hook
	const fnSnsLogin = async (provider: AuthServiceType) => {
		// async-await를 이용하여 promise를 대체함.
		const loginState = await ServiceFactory.AuthService.login(provider);
		// 로그인 성공시 이전 페이지 이동함.
		loginState && navigation(-1);
	};

	return (
		<WrapLogin>
			<ButtonWrap>
				<Button
					type="normal"
					borderRadius={30}
					color="#000"
					onClick={fnSnsLogin.bind(null, 'google')}
				>
					Google 로그인
				</Button>
				<Button
					type="normal"
					borderRadius={30}
					color="#000"
					onClick={fnSnsLogin.bind(null, 'github')}
				>
					Github 로그인
				</Button>
			</ButtonWrap>
		</WrapLogin>
	);
};

const Title = styled.h2`
	color: #000;
	font-size: 35px;
	font-weight: bold;
	padding: 0.2em;
`;

const ButtonWrap = styled.div`
	margin: 1em 0;

	& > a {
		margin: 0 0.2em;
	}
`;

const WrapLogin = styled.div`
	width: 60%;
	margin: 18.5em auto;
	text-align: center;
`;

export default Login;
