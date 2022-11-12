import styled from 'styled-components';

// 컴포넌트에 들어가는 속성 정의
// 아래 속성은 필수 속성은 아님.
interface FontInterface {
	backgroundColor?: string;
	fontColor?: string;
	fontFamily?: string;
}

export const H1 = styled.h1`
	font-size: 32px;
	font-weight: bold;
	background-color: ${(props: FontInterface) =>
		props.backgroundColor || 'white'};
	color: ${(props: FontInterface) => props.fontColor || 'black'};
	font-family: ${(props: FontInterface) => props.fontFamily || 'none'};
`;

export const H2 = styled.h1`
	font-size: 24px;
	font-weight: bold;
	background-color: ${(props: FontInterface) =>
		props.backgroundColor || 'white'};
	color: ${(props: FontInterface) => props.fontColor || 'black'};
	font-family: ${(props: FontInterface) => props.fontFamily || 'none'};
`;

export const H3 = styled.h1`
	font-size: 18px;
	font-weight: bold;
	background-color: ${(props: FontInterface) =>
		props.backgroundColor || 'white'};
	color: ${(props: FontInterface) => props.fontColor || 'black'};
	font-family: ${(props: FontInterface) => props.fontFamily || 'none'};
`;
