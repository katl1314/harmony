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
	border: 2px solid black;
	margin: 5px;
	padding: 5px;
`;
