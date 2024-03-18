import React from "react";


import styled from "styled-components";
import { theme } from "./styles/Theme";
import { font } from "./styles/Common";
type SectionTitlePropsType = {
    title?: string;
    color? : string;
    marginBt? : string;
  };
  

export const SectionTitle = styled.h2<SectionTitlePropsType>`
font-size: 48px;
font-weight: 400;
  color:${(props)=>props.color || `${theme.colors.font}` };
 margin-bottom: ${(props) => props.marginBt || "12px"};
 @media ${theme.media.mobile}{
  font-size: 24px;
 }
`;
