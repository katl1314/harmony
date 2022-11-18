import React from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';

const Vote = () => {
	return (
		<VoteWrap>
			<VoteController />
		</VoteWrap>
	);
};

const VoteController = () => {
	return (
		<div>
			<BiChevronUp size="40" />
			<Panel>0</Panel>
			<BiChevronDown size="40" />
		</div>
	);
};

const VoteWrap = styled.div``;

const Panel = styled.div`
	text-align: center;
	font-weight: bold;
`;

export default Vote;
