import React from "react";
import styled from "styled-components";
import { theme } from "./styles/Theme";

type StyledButtonTypeProps = {
    color? : string;
    background? : string;
    border? : string;
}

export const StyledButton = styled.button<StyledButtonTypeProps>`
border-radius: 40px;
border: none;
/* border: 2px solid ${(props)=> props.border || "#6D31EE"}; */
background: ${(props)=> props.background || "#6D31EE"};
padding: 25px 54px;
color: ${(props) => props.color || "white"};
max-width:300px;
width: 100%;
text-align: center;
font-size: 20px;
font-weight: 500;

:hover {
    background-color: #AA9DFA;
}

:focus-visible {
    background-color: #AA9DFA;
    outline: 2px solid #4F28A5;
  }

  :active {
    background: #4F28A5;
  }

@media ${theme.media.mobile} {
  font-size: 16px;
}
`