import React from "react";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import photo from "../../../assets/images/microphone.png"
import { StyledButton } from "../../../Components/Styledbutton";
import { Container } from "../../../Components/Contatiner";
import {S} from "./Main_Styles"


export const Main = () => {
  return (
    <S.Main>
       <Container>
       <FlexWrapper align="center" justify="space-between" gap="30px">
        <S.Text>
      <S.Title>Радио <span>W-Wave</span></S.Title>
      <S.Description>
        Привет, на связи W-Wave! Раньше мы были изданием, а теперь пробуем себя
        в разоворном жанре. Говорим о музыке, политике, истории, науке
        и культуре. Здесь, помимо прямого эфира — архив передач и многое
        другое:)
      </S.Description>
      <StyledButton>Слушать эфир</StyledButton>
      </S.Text>
      <S.Photo src={photo} alt="" />
        </FlexWrapper>
       </Container>
   
    </S.Main>
  );
};


