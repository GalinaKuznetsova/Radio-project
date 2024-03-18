import React from "react";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import {S} from "./../Podcast_Styles"
import { theme } from "../../../../Components/styles/Theme";
 
export type PodcastPropsType = {
  src?: string;
  srcMobile?:string;
  time?: string;
  title?: string;
  authorName?: string;
  data?: string;
};
export const Podcast = (props: PodcastPropsType) => {
  const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 320;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  return (
    <S.Podcast>
      <FlexWrapper>
      <S.Img  src={props.src} alt=""/>
        
        
        <S.Text>
          <S.Time> {props.time} </S.Time>
          <S.Title>{props.title}</S.Title>
          <S.Name>{props.authorName}</S.Name>
        </S.Text>
        <S.SmallText>{props.data}</S.SmallText>
      </FlexWrapper>
    </S.Podcast>
  );
};


