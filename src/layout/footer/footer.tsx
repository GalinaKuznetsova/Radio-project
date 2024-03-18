import React from "react";
import { Logo } from "../../Components/logo";
import { FlexWrapper } from "../../Components/FlexWrapper";
import { Container } from "../../Components/Contatiner";
import {S} from "./Footer_Styles"
import { Icon } from "../../Components/icon/icon";
import { FooterMenu } from "./footerMenu/footermenu";


const socialItemData = [
  {
    iconId: "youtube",
  },
  {
    iconId: "ok",
  },
  {
    iconId: "vk",
  },
];

export const Footer = () => {
return <S.Footer>
    <Container>
    <FlexWrapper justify="space-between" align="center">
      <S.FooterContent>
      <Logo />
    <S.SocialList>
    
            {socialItemData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink>
                    <Icon
                      height="24px"
                      width="24px"
                      viewBo="0 0 24 24"
                      iconId={s.iconId}
                    />
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
      </S.FooterContent>
      <FooterMenu />
    </FlexWrapper> 
    
    <Icon  width="1140px" height="20" viewBo="0 0 1140 20" iconId="Bigwave"/>
    <S.SmallText>W-WAVE ® 2023</S.SmallText>
    </Container>
   
   
</S.Footer>
}

