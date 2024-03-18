import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";
import { StyledButton } from "../../../Components/Styledbutton";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { font } from "../../../Components/styles/Common";

const Guests = styled.section`
${StyledButton} {
    font-size: 16px;
    border-radius: 77px;
    border: 2px solid #AA9DFA;
    padding: 17px 43px;
    color: #AA9DFA;

    :hover {
         color: #FFF;;
    }
}

`;
const SmallText = styled.span `
font-size: 20px;
font-weight: 700;
`;
const Description = styled.p`
 ${font({family:" 'Muller', sans-serif",weight:400,Fmax:20,Fmin:16})};
color: ${theme.colors.fontDescription};
width: 55%;
margin: 8px 0 50px;

@media ${theme.media.mobile} {
    width: 100%;
}

`;

const Guest = styled.div`
width:100%;

@media ${theme.media.tabletmin} {
    ${FlexWrapper} {
        flex-direction: column;
    }
}`;

const Img = styled.img`
`
const Content = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: start;
`
const Text = styled.div`
width: 100%;

@media ${theme.media.tabletmin} {
    width: 50%;
}

@media ${theme.media.mobile} {
    width: 100%;
    hyphens: auto;
}

`;
const Title = styled.h3 `
color: #FFF;
font-weight: bold;
`
const GuestDescription = styled.p`
margin: 8px 0 30px;
`


export const S = {
    Guests,
    SmallText,
    Description,
    Guest,
    Img,
    Content,
    Text,
    Title,
    GuestDescription
}