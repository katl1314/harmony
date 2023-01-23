import Nav from '@src/pages/header/Nav';
import UserBar from '@src/pages/header/UserBar';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
const Header = memo(() => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
				<UserBar />
			</HeaderContainer>
		</HeaderWrap>
	);
});

export default Header;
