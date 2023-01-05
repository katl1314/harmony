import { TextareaType } from '@src/types/Types';
import styled from 'styled-components';
import { forwardRef, ForwardedRef } from 'react';
const Textarea = forwardRef(
	(
		{ id, placeholder, onChange, value }: TextareaType<HTMLTextAreaElement>,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<InputWrap>
				<textarea
					id={id}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
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
		box-sizing: border-box;
	}
`;

export default Textarea;
