import { InputType } from '@src/types/Types';
import styled from 'styled-components';

const Input = ({ id, name, type, placeholder, onChange }: InputType) => {
	return (<InputWrap>
		<input id={id} name={name} type={type} onChange={onChange} placeholder={placeholder}></input>
	</InputWrap>);
};

const InputWrap = styled.div`
	margin: 0.5em auto;
	& > input {
		width: 100%;
    border: 1px solid skyblue;
    padding: 0.5em;
	}
`;

export default Input;
