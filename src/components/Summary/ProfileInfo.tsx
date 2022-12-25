import { BoardType, UserType } from '@src/types/Types';
import styled from 'styled-components';

const ProfileInfo = ({
	displayName,
	createDt,
}: Partial<BoardType & UserType>) => {
	let time: string = '';
	if (createDt) {
		const nowTime = new Date();
		const createDtTime = new Date(createDt);

		if (nowTime.getFullYear() > createDtTime.getFullYear()) {
			time = `${nowTime.getFullYear() - createDtTime.getFullYear()} 이전 년`;
		} else if (nowTime.getMonth() > createDtTime.getMonth()) {
			time = `${nowTime.getMonth() - createDtTime.getMonth()}월 이전`;
		} else if (nowTime.getDate() > createDtTime.getDate()) {
			time = `${nowTime.getDate() - createDtTime.getDate()}일 이전`;
		} else if (nowTime.getHours() > createDtTime.getHours()) {
			time = `${nowTime.getHours() - createDtTime.getHours()}시 이전`;
		} else if (nowTime.getMinutes() > createDtTime.getMinutes()) {
			time = `${nowTime.getMinutes() - createDtTime.getMinutes()}분 이전`;
		} else if (nowTime.getSeconds() > createDtTime.getSeconds()) {
			time = `${nowTime.getSeconds() - createDtTime.getSeconds()}초 이전`;
		}
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
