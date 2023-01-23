import { IPage } from '@components/Page/Page';
import { atom, selector } from 'recoil';

// recoil 상태 값
export const initPageAtoms = atom<IPage>({
	key: 'pageContext',
	default: {
		pages: 0,
		currentPage: 1,
		count: 0,
	},
});

export const pageInfoSelector = selector<any>({
	key: 'pageInfoSelector',
	// recoil의 상태값을 반환하기 위해서 사용함.
	get: ({ get }) => get(initPageAtoms),
	// recoil의 상태값을 새로운 값으로 업데이트 시
	set: ({ set }, newAtoms: IPage) => set(initPageAtoms, newAtoms),
});
