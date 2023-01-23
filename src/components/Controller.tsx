import { AppContext } from '@src/App';
import { useContext } from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

const Controller = ({ children }: { children: ReactNode }) => {
	// uid가 null이 아니면 로그인중임.
	const { uid } = useContext(AppContext);
	return <ControllerWrap>{uid && children}</ControllerWrap>;
};

const ControllerWrap = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: space-between;
`;

export default Controller;
