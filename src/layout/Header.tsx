import Logo from '@src/pages/header/Logo';
import Nav from '@src/pages/header/Nav';
import { HeaderContainer } from '@src/styles/header';
const Header = () => {
	return (
		<HeaderContainer>
			<Logo />
			<Nav />
		</HeaderContainer>
	);
};

export default Header;
