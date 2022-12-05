import { InputType } from '@src/types/Types';
import styled from 'styled-components';

const Input = ({
	id,
	type,
	placeholder,
	onChange,
	value,
}: InputType<HTMLInputElement>) => {
	return (
		<InputWrap>
			<input
				id={id}
				type={type}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			></input>
		</InputWrap>
	);
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
