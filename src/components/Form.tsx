import styled from 'styled-components';
import Title from '@components/Title';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import { FormEvent, useState, useRef, useContext } from 'react';
import Button from '@components/Button';
import { ServiceFactory } from '@src/services/ServiceFactory';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@src/App';
const Form = ({ category }: { category: string }) => {
	// useState는 React 16.8부터 지원된 훅의 일종으로, 함수형 컴포넌트로 상태값 관리가 가능해짐.
	const [strTitle, setTitle] = useState('');
	const [strContent, setContent] = useState('');

	// useRef : 리액트에서 DOM엘리먼트를 접근할때 사용하는 훅
	const inputRef = useRef(null);
	const textareaRef = useRef(null);

	// 컨텍스트 API : 리액트에서 prop drilling을 방지하며, 상위에서 state를 관리함.
	const { uid: writerId, displayName, photoURL } = useContext(AppContext);

	const navigate = useNavigate();
	const url = `http://127.0.0.1:8080/api/board`;

	const handlerChangeTitle = (event: FormEvent<HTMLInputElement>) => {
		// onChange이벤트의 event객체의 타입은 FormEvent<T>으로 해야함.
		const target: any = event.target;
		setTitle(target.value);
	};

	const handlerChangeContent = (event: FormEvent<HTMLTextAreaElement>) => {
		// onChange이벤트의 event객체의 타입은 FormEvent<T>으로 해야함.
		const target: any = event.target;
		if (target.value.length > 500) {
			return;
		}
		setContent(target.value);
	};

	const postRegister = (event: FormEvent) => {
		// 이벤트 동작 제어
		event.preventDefault();
		if (inputRef.current && textareaRef.current) {
			const title: string = (inputRef.current as HTMLInputElement).value;
			const content: string = (textareaRef.current as HTMLTextAreaElement)
				.value;
			const boardId = `${
				new Date().getMilliseconds() + Math.random() * 100 + 1
			}`;
			const config = {
				header: { 'Content-Type': 'application/json' },
				params: {
					writerId,
					boardId,
					title,
					content,
					category,
					displayName,
					photoURL,
				},
			};
			// 중첩 객체가 없을 경우 안전하게 접근하도록 ?.(옵셔널 체이닝)을 사용함.
			ServiceFactory.AxiosService?.post(`${url}/`, config)
				.then(() => {
					navigate('/community');
				})
				.catch((error) => console.error(error));
		}
	};

	return (
		<FormWrap onSubmit={postRegister}>
			<Title>{category} 글 추가</Title>
			<Input
				id="title"
				type="text"
				placeholder="제목"
				onChange={handlerChangeTitle}
				value={strTitle}
				required={true}
				ref={inputRef}
			></Input>
			<Textarea
				id="content"
				placeholder="내용"
				onChange={handlerChangeContent}
				value={strContent}
				required={true}
				ref={textareaRef}
			></Textarea>
			<Button type="submit">글 쓰기</Button>
		</FormWrap>
	);
};

const FormWrap = styled.form`
	width: 100%;
	margin: 2em auto;
`;

export default Form;
