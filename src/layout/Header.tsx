import Nav from '@src/pages/header/Nav';
import Account from '@src/pages/header/Account';
import { HeaderContainer, HeaderWrap } from '@src/styles/header';
const Header = () => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				<Nav />
				<Account />
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
