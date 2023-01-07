import { ReactNodeType } from "@src/types/Types";
import styled from "styled-components";

const SummaryHeader = ({children}: {children: ReactNodeType}) => {
  return <HeaderWrap>{children}</HeaderWrap>
};

const HeaderWrap = styled.div`
  display: grid;
	grid-template-columns: 3% 97%;
	grid-template-rows: 20px;
	// PC
	@media screen and (max-width: 767px) {
		gap: 10px;
	}
`;

export default SummaryHeader;
