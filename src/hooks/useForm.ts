import { formSelector, initFormAtoms } from '@src/atoms/atoms';
import { useState, useEffect, SyntheticEvent } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
// 서버에서 데이터를 패칭하는 것은 useQuery Hook을 이용하여 처리하였음.

/**
 *
 * @param initialValues 초기값
 * @param validate 유효성 검사를 위한 함수
 * @param url 서버에 전달하기 위한 경로
 * @returns { value, handlerChange, handlerSubmit }
 */
export const useForm = ({ onSubmit, validate }: IFormParam) => {
	const resetState = useResetRecoilState(initFormAtoms);
	const [value, setValue] = useRecoilState(formSelector);

	const [isValidate, setValidate] = useState<{
		error: any;
		message: any;
	} | null>({
		error: null,
		message: null,
	});
	const [isLoading, setIsLoading] = useState(false);

	const handlerChange = <T extends ElementEditType>(event: SyntheticEvent) => {
		const id = (event.target as T).id;
		const changeValue = (event.target as T).value;
		// 기존객체를 덮어쓰기
		setValue({ ...value, [id]: changeValue });
	};

	/**
	 * SyntheticEvent는 합성 이벤트
	 * 이벤트 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 SyntheticEvent 객체를 전달받는다.
	 * 합성 이벤트는 NativeEvent(브라우저 고유 이벤트)에 직접 대응하지 않음.
	 */
	const handlerSubmit = async (event: SyntheticEvent) => {
		try {
			event.preventDefault();
			setIsLoading(true); // 로딩중...
			await new Promise((r) => setTimeout(r, 1000));
			setValidate(validate(value));
		} catch (error: any) {
			throw new Error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		// isValidate가 null이면 submit시작.
		isValidate ?? onSubmit(value);
		isValidate && console.log(isValidate);
	}, [isValidate]);

	useEffect(() => {
		// 컴포넌트 마운트 될때 atoms default값으로 초기화.
		resetState();
	}, []);

	return { value, isLoading, handlerChange, handlerSubmit };
};

export interface IFormData {
	title: string;
	content: string;
	category?: string;
}

interface IFormParam extends IFormData {
	onSubmit: (data: any) => void;
	validate: (value: any) => { error: any; message: any } | null;
}

type ElementEditType = HTMLInputElement | HTMLTextAreaElement;
