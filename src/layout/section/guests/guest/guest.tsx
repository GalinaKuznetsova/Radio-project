import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import { StyledButton } from "../../../../Components/Styledbutton";
import {S} from "./../Guests_Styles"

type GuestPropsType = {
    src : string;
    title : string;
    description : string;
}

export const Guest = (props:GuestPropsType) => {
  return (
    <S.Guest>
      <FlexWrapper  justify="space-between" gap="30px">
        <S.Img src={props.src} alt="" />
        <S.Content>
        <S.Text>
          <S.Title>{props.title}</S.Title>
          <S.GuestDescription>{props.description}</S.GuestDescription>
           </S.Text>
          <StyledButton background="#121723">Эфиры с гостем</StyledButton>
        </S.Content>      
      </FlexWrapper>
    </S.Guest>
  );
};


