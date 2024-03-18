import React from "react";
import styled from "styled-components";
import { Logo } from "../../Components/logo";

import { FlexWrapper } from "../../Components/FlexWrapper";
import { Container } from "../../Components/Contatiner";
import { Icon } from "../../Components/icon/icon";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";



export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
return <StyledHeader>
    <Container>
    <FlexWrapper justify="space-between" align="center">
    <Logo />
    {width < breakpoint ? <MobileMenu /> 
          : <DesktopMenu/>}
    <Icon iconId ={"search"} width="24px" height="24px" viewBo="0 0 24 24"/>
    </FlexWrapper> 
    </Container>
   
</StyledHeader>
}

const StyledHeader = styled.header`
  padding: 20px 0;
 

  a{
    color: rgba(41, 46, 57, 1);
  }
`;

