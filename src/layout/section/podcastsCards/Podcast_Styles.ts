import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { font } from "../../../Components/styles/Common";
import { SectionTitle } from "../../../Components/SectionTitle";


const Podcasts = styled.section`

${SectionTitle} { 
  margin-bottom: 30px;

  @media ${theme.media.tabletmin}{
    text-align: center;
    width: 50%;
}

}
`;
const PodcastContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:30px;
  justify-items:center;

  @media ${theme.media.tabletmin}{
  grid-template-columns:  1fr ;
 }`

const Podcast = styled.div`
  max-width: 540px;
  width: 100%;
  flex-grow:1;
  justify-content: center;
  background-color: #FFF;

  position: relative;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      flex-direction: column;
    }
  }
`; 
const Img = styled.img`
    max-width: 112px;
    width: 100%;

    @media ${theme.media.mobile} {
    max-width: 256px;
    height: 72px;
    }
  
`;
const Text = styled.div`
    padding: 40px  30px;
  
  @media ${theme.media.mobile} {
    padding: 30px 10px;
    min-height: 113px;
}
`;
const Time = styled.span` 
font-size: 12px;
`;
const Title = styled.h3`
   margin: 8px 0 4px 0;

   @media ${theme.media.mobile} {
    margin: 6px 0 3px 0;
}
`;
const Name = styled.h4`
 ${font({family:" 'Muller', sans-serif",weight:400,Fmax:16,Fmin:12})};
  color: #a1a6b4;
  
`;

const SmallText = styled.span`
    position:absolute;
    bottom: -1px;
    left: -1px;
    display: inline-block;
    width: 51px;
    height: 16px;
    background: #e6e8ec;
    color: #121723;

    text-align: center;
    font-size: 10px;
    font-weight: 400;
   
@media ${theme.media.mobile} {
    top: -1px;
    left: 0px;
}

`;

export const S = {
    Podcasts,
    PodcastContent,
    Podcast,
    Img,
    Text,
    Time,
    Title,
    Name,
    SmallText

}