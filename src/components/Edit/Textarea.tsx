import { TextareaType } from '@src/types/Types';
import styled from 'styled-components';
import { forwardRef, ForwardedRef } from 'react';
const Textarea = forwardRef(
	(
		{
			id,
			placeholder,
			onChange,
			value,
			required,
		}: TextareaType<HTMLTextAreaElement>,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<InputWrap>
				<textarea
					id={id}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					required={required}
					ref={ref}
				></textarea>
			</InputWrap>
		);
	}
);

const InputWrap = styled.div`
	margin: 0.5em auto;
	& > textarea {
		width: 100%;
		min-height: 200px;
		border: 1px solid skyblue;
		padding: 0.5em;
	}
`;

export default Textarea;
