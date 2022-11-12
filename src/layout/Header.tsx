import Nav from '@src/pages/header/Nav';
import Gnb from '@src/pages/header/Gnb';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
const Header = () => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
				<Gnb />
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
