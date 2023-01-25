import { InputType } from '@src/types/Types';
import styled from 'styled-components';
import { forwardRef, ForwardedRef } from 'react';
const Input = forwardRef(
	(
		{ id, type, placeholder, onChange, value }: InputType<HTMLInputElement>,
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
					ref={ref}
				></input>
			</InputWrap>
		);
	}
);

export default Input;

const InputWrap = styled.div`
	& > input {
		width: 100%;
		border: 1px solid #e5e5e5;
		padding: 0.5em;
		box-sizing: border-box;
		border-radius: 5px;
		height: 35px;
	}
`;
