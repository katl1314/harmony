import { TextareaType } from '@src/types/Types';
import styled from 'styled-components';

const Textarea = ({
	id,
	placeholder,
	onChange,
	value,
}: TextareaType<HTMLTextAreaElement>) => {
	return (
		<InputWrap>
			<textarea
				id={id}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			></textarea>
		</InputWrap>
	);
};

const InputWrap = styled.div`
	margin: 0.5em auto;
	& > textarea {
		width: 100%;
		border: 1px solid skyblue;
		padding: 0.5em;
	}
`;

export default Textarea;
