import { ServiceFactory } from '@src/services/ServiceFactory';
import { BoardType } from '@src/types/Types';
import { useReducer, Reducer, useEffect } from 'react';

const useDetail = (boardId: number) => {
	const initState: BoardType = {
		boardId,
		writerId: '',
		title: '',
		content: '',
		category: '',
		nlike: 0,
		createDt: null,
	};

	const [state, dispatch] = useReducer<Reducer<any, BoardType>>(
		reducer,
		initState
	);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const config = {
			header: { 'Content-Type': 'application/json' },
		};

		const { data } = await ServiceFactory.AxiosService.get(
			`http://127.0.0.1:8080/api/board/${boardId}`,
			config
		);

		dispatch(data);
	};
	return [state];
};

const reducer = (state: any, action: any) => {
	return { ...state, ...action };
};

export default useDetail;
