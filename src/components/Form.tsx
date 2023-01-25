import styled from 'styled-components';
import { useForm } from '@src/hooks/useForm';
import { service } from '@src/services/AxiosService';
import { useNavigate } from 'react-router-dom';
import { useRef, useContext, ReactNode } from 'react';
import { AppContext } from '@src/App';
import Input from '@src/components/Edit/Input';
import TextEditorForm from './Edit/TextEditorForm';

const Form = ({ category }: { category: string }) => {
	const navigate = useNavigate();
	const titleRef = useRef(null);
	// const contentRef = useRef(null);
	const { uid } = useContext(AppContext);
	const fnSubmit = async (data: any) => {
		try {
			const url = '/board/';
			await service.post(url, { ...data, writerId: uid });
			navigate('/');
		} catch (err: any) {
			throw new Error(err.message);
		}
	};

	const fnValidate: any = (value: any) => {
		// validate 로직은 컴포넌트별 다르기 때문에 공통에서 작성하면 안됨.
		const { title, content } = value;

		if (title === '') {
			return { error: new Error('제목을 입력하세요.'), target: titleRef };
		}

		/* if (content === '') {
			return { error: new Error('내용을 입력하세요.'), target: contentRef };
		} */
		// 정상적으로 validate 체크 완료시 null리턴
		return null;
	};

	const { value, handlerChange, handlerSubmit } = useForm({
		title: '',
		content: '',
		onSubmit: fnSubmit,
		validate: fnValidate,
	});

	return (
		<FormWrap onSubmit={handlerSubmit}>
			<FormItem>
				<Label>
					<label htmlFor="title">제목</label>
				</Label>
				<Input
					id="title"
					type="text"
					value={value.title ?? ''}
					onChange={handlerChange}
					ref={titleRef}
					placeholder={'제목을 입력하세요.'}
				></Input>
			</FormItem>
			<FormItem>
				<Label>
					<label>내용</label>
				</Label>
				<TextEditorForm />
			</FormItem>
			<FormItem>
				<Button type="submit">글 쓰기</Button>
			</FormItem>
		</FormWrap>
	);
};

const FormItem = ({ children }: { children: ReactNode[] | ReactNode }) => {
	return <FormItemWrap>{children}</FormItemWrap>;
};

const FormWrap = styled.form`
	width: 80%;
	margin: 1rem;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const FormItemWrap = styled.div`
	width: auto;
	margin: 1em;
`;

const Label = styled.p`
	font-size: 0.875rem;
	font-weight: bold;
	color: #5d5d5d;
	margin: 0.5rem 0;
`;

interface IButton {
	type: 'submit' | 'button';
	children: string;
	size?: 'sm' | 'md' | 'lg';
	backColor?: string | null;
	fontColor?: string | null;
	borderRadius?: number | null;
}

// ts와 styled-component를 같이 쓸 경우 임의의 속성을 사용하면서 No overload mathces this call에러 발생
// overload은 동일한 함수에서 들어오는 매개변수의 type에 따라 다른 프로세스를 진행함.
const Button = ({
	children,
	size = 'md',
	type = 'button',
	backColor = '#74c3ff',
	fontColor = '#000',
	borderRadius = null,
}: IButton) => {
	return (
		<StyledButton
			type={type}
			size={size}
			backColor={backColor}
			fontColor={fontColor}
			borderRadius={borderRadius}
		>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button<IButton>`
	background-color: ${({ backColor }: IButton) => backColor ?? '#ffffff'};
	color: ${({ fontColor }: IButton) => fontColor ?? '#000000'};
	border-radius: ${({ borderRadius }: IButton) => borderRadius ?? '0px'};
	padding: 0.7em 1em;
	cursor: pointer;
`;

export default Form;
