import Nav from '@src/pages/header/Nav';
import UserBar from '@src/pages/header/UserBar';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
const Header = () => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
				<UserBar />
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
