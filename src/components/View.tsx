import { ReactElement } from 'react';
const View = ({
	children,
	totalCnt,
}: {
	children: ReactElement[];
	totalCnt: number;
}) => {
	return <>{totalCnt > 0 ? <>{children}</> : <div>데이터가 없습니다.</div>}</>;
};

export default View;
