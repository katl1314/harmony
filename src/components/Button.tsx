import styled from 'styled-components';
import { ButtonType } from '@src/types/Types';
import { memo } from 'react';
const Button = ({
	backColor,
	borderRadius,
	children,
	color,
	type,
	onClick,
}: ButtonType<HTMLAnchorElement | HTMLButtonElement>) => {
	if (type === 'submit') {
		return (
			<ButtonWrap
				type={type}
				backColor={backColor}
				color={color}
				borderRadius={borderRadius}
			>
				{children}
			</ButtonWrap>
		);
	}
	return (
		<ButtonAWrap
			type={type}
			backColor={backColor}
			color={color}
			borderRadius={borderRadius}
			onClick={onClick}
		>
			{children}
		</ButtonAWrap>
	);
};

const ButtonAWrap = styled.a`
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid #e5e5e5;
	background-color: ${({ backColor }: ButtonType<HTMLAnchorElement>) =>
		backColor ?? '#ffffff'};
	border-radius: ${({ borderRadius }: ButtonType<HTMLAnchorElement>) =>
		borderRadius ? `${borderRadius}px` : `0px`};
	padding: 0.7em 1em;
	color: ${(props: ButtonType<HTMLAnchorElement>) => props.color || '#000'};
	cursor: pointer; // 커서 모양 설정
`;

const ButtonWrap = styled.button`
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid #e5e5e5;
	background-color: ${({ backColor }: ButtonType<HTMLButtonElement>) =>
		backColor ?? '#ffffff'};
	border-radius: ${({ borderRadius }: ButtonType<HTMLButtonElement>) =>
		borderRadius ? `${borderRadius}px` : `0px`};
	padding: 0.7em 1em;
	color: ${(props: ButtonType<HTMLButtonElement>) => props.color || '#000'};
	cursor: pointer; // 커서 모양 설정
`;

export default memo(Button);
