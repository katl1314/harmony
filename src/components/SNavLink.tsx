import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavLinkType } from '@src/types/Types';

const SNavLink = ({
	to,
	background,
	borderradius,
	color,
	children,
}: NavLinkType) => {
	return (
		<NavLinkWrap
			to={to}
			background={background}
			borderradius={borderradius}
			color={color}
		>
			{children}
		</NavLinkWrap>
	);
};

const NavLinkWrap = styled(NavLink)`
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid #e5e5e5;
	background-color: ${({ background }: NavLinkType) => background ?? '#ffffff'};
	border-radius: ${({ borderradius }: NavLinkType) =>
		borderradius ? `${borderradius}px` : `0px`};
	padding: 0.7em 1em;
	color: ${({ color }: NavLinkType) => color ?? '#000'};
`;

export default SNavLink;
