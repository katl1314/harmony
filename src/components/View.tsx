import { ReactNodeType } from '@src/types/Types';
const View = ({
	children,
	totalCnt,
}: {
	children: ReactNodeType;
	totalCnt: number;
}) => {
	return <>{totalCnt > 0 ? <>{children}</> : <div>데이터가 없습니다.</div>}</>;
};

export default View;
