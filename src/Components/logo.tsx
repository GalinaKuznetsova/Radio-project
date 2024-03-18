import React from "react";
import { Icon } from "./icon/icon";
import styled from "styled-components";

export const Logo = () => {
    return <LogoLink href="#">
       <Icon iconId = {'logo'} />
    </LogoLink>
}

const LogoLink = styled.a `
    display: block;
    text-align: center;
`