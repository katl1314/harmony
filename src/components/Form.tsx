import styled from 'styled-components';
import { FormType } from '@src/types/Types';
import Title from '@components/Title';
import Input from '@components/input/Input';
import Textarea from '@components/Textarea';
import { FormEvent, useState } from 'react';

const Form = ({ onSubmit, category }: FormType & { category: string }) => {
	const [strTitle, setTitle] = useState('');
	const [strContent, setContent] = useState('');

	const handlerChangeTitle = (event: FormEvent<HTMLInputElement>) => {
		// onChange이벤트의 event객체의 타입은 FormEvent<T>으로 해야함.
		const target: any = event.target;
		setTitle(target.value);
	};

	const handlerChangeContent = (event: FormEvent<HTMLTextAreaElement>) => {
		// onChange이벤트의 event객체의 타입은 FormEvent<T>으로 해야함.
		const target: any = event.target;
		setContent(target.value);
	};

	return (
		<FormWrap onSubmit={onSubmit}>
			<Title>{category} 글 추가</Title>
			<Input
				id="title"
				type="text"
				placeholder="제목"
				onChange={handlerChangeTitle}
				value={strTitle}
			></Input>
			<Textarea
				id="content"
				placeholder="내용"
				onChange={handlerChangeContent}
				value={strContent}
			></Textarea>
		</FormWrap>
	);
};

const FormWrap = styled.form``;

export default Form;
