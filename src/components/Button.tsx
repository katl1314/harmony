import styled from 'styled-components';
import { ButtonType } from '@src/types/Types';

const Button = ({
	background,
	borderradius,
	children,
	color,
	onClick,
}: ButtonType) => {
	return (
		<ButtonWrap
			background={background}
			color={color}
			borderradius={borderradius}
			onClick={onClick}
		>
			{children}
		</ButtonWrap>
	);
};

const ButtonWrap = styled.a`
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid #e5e5e5;
	background-color: ${({ background }: ButtonType) => background ?? '#ffffff'};
	border-radius: ${({ borderradius }: ButtonType) =>
		borderradius ? `${borderradius}px` : `0px`};
	padding: 0.7em 1em;
	color: ${(props: ButtonType) => props.color || '#000'};
	cursor: pointer; // 커서 모양 설정
`;

export default Button;
