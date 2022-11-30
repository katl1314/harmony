import styled from 'styled-components';

export const Button = ({
	children,
	onClick,
}: {
	children: string;
	onClick: () => void;
}) => {
	return <ButtonWrap onClick={() => onClick()}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.a`
	border: 1px solid #e5e5e5;
	margin: 5px;
	display: inline-block;
	padding: 0 1em;
	box-sizing: border-box;
	border-radius: 30px;
	padding: 0.7em 1em;
	cursor: pointer;
`;
