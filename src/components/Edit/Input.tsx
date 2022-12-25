import { InputType } from '@src/types/Types';
import styled from 'styled-components';
import { forwardRef, ForwardedRef } from 'react';
const Input = forwardRef(
	(
		{
			id,
			type,
			placeholder,
			onChange,
			value,
			required,
		}: InputType<HTMLInputElement>,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<InputWrap>
				<input
					id={id}
					type={type}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					required={required}
					ref={ref}
				></input>
			</InputWrap>
		);
	}
);

export default Input;

const InputWrap = styled.div`
	margin: 0.5em auto;
	& > input {
		width: 100%;
		border: 1px solid skyblue;
		padding: 0.5em;
		box-sizing: border-box;
	}
`;
