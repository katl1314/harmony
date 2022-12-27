import { service } from '@src/services/AxiosService';
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
		const url = `/board/${boardId}`;
		const { data } = await service.get(url);

		dispatch(data);
	};
	return [state];
};

const reducer = (state: any, action: any) => {
	return { ...state, ...action };
};

export default useDetail;
