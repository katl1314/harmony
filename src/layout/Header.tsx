import Nav from '@src/pages/header/Nav';
import UserBar from '@src/pages/header/UserBar';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
import { memo } from 'react';

import styled from 'styled-components';
const Header = memo(({ percent }: IProgressBar) => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
				<UserBar />
			</HeaderContainer>
			<ProgressBar percent={percent} />
		</HeaderWrap>
	);
});

interface IProgressBar {
	percent: number;
}

const ProgressBar = ({ percent }: IProgressBar) => {
	return <WrapBar percent={percent} />;
};

const WrapBar = styled.div`
	height: 3px;
	background-color: red;
	position: absolute;
	left: 0;
	bottom: 0;
	transition: cubic-bezier(0.645, 0.045, 0.355, 1);
	/* transition-duration: 500; */
	width: ${({ percent }: IProgressBar) =>
		percent > 100 ? '100%' : `${percent}%`};
`;

export default Header;
