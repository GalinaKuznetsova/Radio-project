import { SectionTitle } from './../../../Components/SectionTitle';
import styled from "styled-components";
import arrow from "../../../assets/images/broadcast/arrow.svg"
import { theme } from "../../../Components/styles/Theme";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { StyledButton } from "../../../Components/Styledbutton";

const Broadcasts = styled.section`
width: 100%;
${SectionTitle} {
    width: 50%;
}

${StyledButton} {
  max-width:160px;
  padding: 17px 43px;
  border: 2px solid #121723;
  margin: 24px 0 14px 0;
 font-size: 16px;

}


@media ${theme.media.tabletmin}{
  ${FlexWrapper} {
    flex-direction: column-reverse;
    align-items: center;
}
}
`
const BroadcastsContent = styled.div`
  max-width:255px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* flex-grow: 1; */
  position: relative;
  z-index: 1;

  @media ${theme.media.tabletmin}{
     align-items: end;
    max-width:345px;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}

`;

const BroadcastsImg = styled.img`
  max-width: 70px;
  min-height: 89px;

`
const Information = styled.p`
  color: #a1a6b4;
  font-size: 16px;
  font-weight: 400;

  ::after {
    content: "...";
    display: block;
    width: 65px;
    height: 89px;
    position: absolute;
    top:50%;
    left:0;
    
    z-index: 2;
  }
`;

const Broadcast = styled.div`
max-width:255px;
width: 100%;
`;

const BroadcastContent = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:30px;

  @media ${theme.media.tabletmin}{
  grid-template-columns: 1fr 1fr ;
 }
`

const Img = styled.img`
  max-width: 255px;
  width: 100%;
  min-height: 50px;
  object-fit: cover;
@media ${theme.media.mobile} {
  /* width: 113px;
  height: 50px; */
}
`
const Text = styled.div`
border-left: 1px solid #E6E8EC;
border-right: 1px solid #E6E8EC;
border-bottom: 1px solid #E6E8EC;
padding: 20px 16px;

@media ${theme.media.mobile} {
  padding: 10px 10px;
}


background: #FFF`;
const Title = styled.h3`
font-weight: 500;
`;
const Description = styled.p`
color: #A1A6B4;
font-size: 12px;
font-weight: 400;
margin-bottom: 12px;
`;

const Detail = styled.span`
display: inline;
font-size: 16px;
font-style: italic;
font-weight: 400;
position: relative;

 ::before {
  content: url(${arrow});
  width: 28px;
  height: 12px;

  position: absolute;
  top:0;
  right: 0;
  transform: translateX(30px);
} 
@media ${theme.media.mobile} {
 font-size: 12px
}
`


export const S = {
    Broadcasts,
    BroadcastsContent,
    BroadcastsImg ,
    Information,
    Broadcast,
    Img,
    Text,
    Title,
    Description,
    Detail,
    BroadcastContent

}
