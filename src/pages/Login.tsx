import { ChangeEvent, useState } from "react";
import { Button } from '@components/button/Button';
import { H2 } from '@components/fonts/Font';
import styled from 'styled-components';
import { ServiceFactory } from '@src/services/ServiceFactory';
import Input from "@src/components/input/Input";
const Login = () => {
	const fnGoogleLogin = () => {
		ServiceFactory.AuthService.login('google');
	};

	const fnGithubLogin = () => {
		ServiceFactory.AuthService.login('github');
	};

	const handlerInputId = (event: ChangeEvent<HTMLInputElement>) => {

	}

	const handlerInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
	}

	return (
		<WrapLogin>
			<H2>로그인</H2>
			<Form>
				<Input id="id" name="id" type="text" onChange={handlerInputId} value="" placeholder="아이디" />
				<Input id="id" name="id" type="password" onChange={handlerInputPassword} value="" placeholder="패스워드"/>
			</Form>
			<Button onClick={fnGoogleLogin}>Google 로그인</Button>
			<Button onClick={fnGithubLogin}>Github 로그인</Button>
		</WrapLogin>
	);
};

const WrapLogin = styled.div`
	text-align: center;
`;

const Form = styled.form`
	@media screen and (min-width: 1024px){
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
