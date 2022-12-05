import { ChangeEvent } from 'react';
import Button from '@src/components/Button';
import styled from 'styled-components';
import { ServiceFactory } from '@src/services/ServiceFactory';
import Input from '@src/components/input/Input';
import { AuthServiceType } from '@src/types/Types';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	// react-router-dom v5, useHistory를 대체한 Hook으로, 리액트에서 url을 변경하기 위한 기능을 담당.
	const navigation = useNavigate();
	// react-router-dom v6에서 현재 url의 정보를 반환하는 Hook
	const fnSnsLogin = async (provider: AuthServiceType) => {
		// async-await를 이용하여 promise를 대체함.
		const loginState = await ServiceFactory.AuthService.login(provider);
		loginState && navigation('/');
	};

	const handlerInputId = (event: ChangeEvent<HTMLInputElement>) => {};

	const handlerInputPassword = (event: ChangeEvent<HTMLInputElement>) => {};

	return (
		<WrapLogin>
			<Title>로그인</Title>
			<Form>
				<Input
					id="id"
					type="text"
					onChange={handlerInputId}
					value=""
					placeholder="아이디"
				/>
				<Input
					id="id"
					type="password"
					onChange={handlerInputPassword}
					value=""
					placeholder="패스워드"
				/>
			</Form>
			<Button
				background="#ffffff"
				borderradius={30}
				color="#000"
				onClick={fnSnsLogin.bind(null, 'google')}
			>
				Google 로그인
			</Button>
			<Button
				background="#ffffff"
				borderradius={30}
				color="#000"
				onClick={fnSnsLogin.bind(null, 'google')}
			>
				Github 로그인
			</Button>
		</WrapLogin>
	);
};

const Title = styled.h2`
	color: #000;
	font-size: 35px;
	font-weight: bold;
`;

const WrapLogin = styled.div`
	text-align: center;
`;

const Form = styled.form`
	@media screen and (min-width: 1024px) {
		margin: 0.5em auto;
		border-bottom: 1px solid;
		padding: 0.5em;
		width: 30%;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		margin: 0.5em auto;
		border-bottom: 1px solid;
		padding: 0.5em;
		width: 60%;
	}
`;

export default Login;
