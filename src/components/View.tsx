import { ReactNodeType } from '@src/types/Types';
const View = ({
	children,
	totalCnt,
}: {
	children: ReactNodeType;
	totalCnt: number;
}) => {
	return <>{totalCnt && <>{children}</>}</>;
};

export default View;
