import { FlexWrapper } from '../../Components/FlexWrapper';
import { theme } from '../../Components/styles/Theme';
import styled from "styled-components";

const Footer = styled.footer`
min-height: 485px;
background-color: #292E39;
align-items: center;


svg {
    width: 100%;
}

    a {
        color: rgba(255, 255, 255, 1);
    }
    
li { 
    color:  rgba(255, 255, 255, 1);
}
@media ${theme.media.tabletmin} {
    ${FlexWrapper} {
        flex-direction: column;
       
    }
}

`
const FooterContent = styled.div`
padding: 94px 0;

@media ${theme.media.mobile} {
   padding: 54px 0;
}
`

const SocialList = styled.ul`
display:flex;
gap:20px;
margin-top:20px;
justify-content: center;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};

&:hover {
  /* background-color: ${theme.colors.accent};
  color: ${theme.colors.secondaryBg}; */
  transform: translateY(-4px);

}
`
const MenuList =  styled.div`
width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(3, minmax(auto));
  grid-template-rows: repeat(3, minmax( auto));
  gap: 30px; */
@media ${theme.media.tabletmin} {
    display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  width: 100%;
}

@media ${theme.media.mobile} {
  grid-template-columns: 1fr 1fr; 
  background-color: #121723;
  padding: 30px 32px;
 


}
`

const MenuItem = styled.div`
`;
const NavLink = styled.a``;
const SmallText = styled.span`
display: block;
color: #A1A6B4;
font-size: 16px;
font-weight: 400;
text-align: center;
`


export const S = {
    Footer,
    FooterContent,
    SocialList,
    SocialItem,
    SocialLink,
    MenuList,
    NavLink,
    MenuItem,
    SmallText
}