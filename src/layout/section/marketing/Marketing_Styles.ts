import { FlexWrapper } from './../../../Components/FlexWrapper';
import styled from "styled-components";
import { StyledButton } from "../../../Components/Styledbutton";
import IconBt from './../../../assets/images/marketing/IconBt.svg'
import label from './../../../assets/images/marketing/label.svg'
import { theme } from "../../../Components/styles/Theme";

const Marketing = styled.section`
 ${FlexWrapper} {
  align-items: center;
}
           
    
 svg {
    margin: 19px 0;
 }
${StyledButton} {
    border-radius: 100px;
    border: 2px solid #F0D288;
    background-color:#292E39;
    font-size: 20px;
    font-weight: 500;
    padding: 25px 13px 25px 41px;
    color: #F0D288;
    font-size: 20px;
    font-weight: 500;
    position: relative;

    ::after {
        content:url(${IconBt});
        position: absolute;
        top: 25px;
        left: 13px;
    }
}

@media ${theme.media.tabletmin} {
        ${FlexWrapper} {
            flex-direction: column;
           
        }
    }`;
const ImgContent = styled.div`
position: relative;

::after {
        content:url(${label});
        position: absolute;
        top: 0;
        left: 0;
    }
`
const Img = styled.img`
max-width: 640px;
width:100%;


`;

const Text = styled.div`
  max-width: 445px;
  width: 100%;
`;

const Description = styled.p`
  color: #fff;
`;

const SmallText = styled.span`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  margin: 30px 0;
`;

export const S = {
    Marketing,
    ImgContent,
    Img,
    Text,
    Description,
    SmallText
}