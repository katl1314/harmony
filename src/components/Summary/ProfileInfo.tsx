import { BoardType, UserType } from '@src/types/Types';
import { Dates } from '@src/utils';
import styled from 'styled-components';

// moment를 한글로 표시할 경우
const ProfileInfo = ({
	displayName,
	createDt,
}: Partial<BoardType & UserType>) => {
	let time: string = '';
	if (createDt) {
		const createDtTime = new Date(createDt);
		time = Dates.fromNow(createDtTime, 'YYYY-MM-DD HH:mm:dd');
	}

	return (
		<WriterWrap>
			<div>{displayName}</div>
			<div>{time}</div>
		</WriterWrap>
	);
};

export default ProfileInfo;

const WriterWrap = styled.div`
	display: flex;
	/* column-gap : 컬럼간 간격을 설정 할 수 있음. */
	column-gap: 5px;

	& > div {
		padding: 0.2em;
		font-size: 0.8rem;
	}
`;
