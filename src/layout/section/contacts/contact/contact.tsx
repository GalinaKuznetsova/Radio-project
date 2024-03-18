import React from "react";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import {S} from "./../Contacts_Styles"

type ContactPropsType = {
  src: string;
  title: string;
  description: string;
};
export const Contact = (props: ContactPropsType) => {
  return (
    <S.Contact>
      <FlexWrapper direction="column">
        <S.Img src={props.src} alt="" />
        <S.ContactText>
          <S.ContactTitle>{props.title}</S.ContactTitle>
          <S.ContactDescription>{props.description}</S.ContactDescription>
        </S.ContactText>
      </FlexWrapper>
    </S.Contact>
  );
};


