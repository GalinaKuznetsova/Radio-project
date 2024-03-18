import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import { Icon } from "../../../../Components/icon/icon";
import {S} from "./../Broadcasts_Styles"

type BroadcastPropsType = {
    src : string;
    title : string;
    description : string;
}

export const Broadcast = (props:BroadcastPropsType) => {
  return (
    <S.Broadcast>
        <S.Img src={props.src} alt="" />
        <S.Text>
          <S.Title>{props.title}</S.Title>
          <S.Description>{props.description}</S.Description>
          <S.Detail>Подробнее</S.Detail>
        </S.Text>
    </S.Broadcast>
  );
};

