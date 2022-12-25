import styled from 'styled-components';
import { memo } from 'react';
import { ReactNodeType } from '@src/types/Types';
const Select = ({ options }: { options: any }) => {
	return (
		<SelectController>
			<OptionItems options={options} />
		</SelectController>
	);
};

const OptionItems = ({ options }: { options: any }) => {
	// 객체를 이차원 배열로 변환 Object.entries
	const optionItem = Object.entries(options).map(([key, value]) => {
		return <OptionItem key={key}>value</OptionItem>;
	});
	return <>{optionItem}</>;
};

const SelectController = ({ children }: { children: ReactNodeType }) => {
	return <SelectWrap>{children}</SelectWrap>;
};

const SelectWrap = styled.select`
	width: 100%;
	padding: 0.7em 0;
	border: 1px solid;
	margin-top: 15px;
`;

const OptionItem = styled.option``;

export default memo(Select);
