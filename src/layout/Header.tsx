import Nav from '@src/pages/header/Nav';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
const Header = () => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
