import React from "react";
import { SectionTitle } from "../../../Components/SectionTitle";
import { Container } from "../../../Components/Contatiner";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import img1 from "../../../assets/images/contacts/img-1.webp";
import img2 from "../../../assets/images/contacts/img-2.webp";
import img3 from "../../../assets/images/contacts/img-3.webp";
import img4 from "../../../assets/images/contacts/img-4.webp";
import imgBig1 from "../../../assets/images/contacts/imgBig1.webp";
import imgBig2 from "../../../assets/images/contacts/imgBig2.webp";
import imgBig3 from "../../../assets/images/contacts/imgBig3.webp";
import imgBig4 from "../../../assets/images/contacts/imgBig4.webp";
import { Contact } from "./contact/contact";
import { StyledButton } from "../../../Components/Styledbutton";
import {S} from "./Contacts_Styles"

const ContactsData = [
  {
    src:imgBig1,
    title :"Дмитрий Гутенберг",
    description:"Эксперт (ну, почти) по всем вопросам (почти)"
  },
  {
    src:imgBig2,
    title :"Анна Васильева",
    description:"Как я здесь оказалась? А главное — зачем?"
  },
  {
    src:imgBig3,
    title :"Пётр Дмитриевский",
    description:"Господа! Внимание! Благодарю за внимание!"
  },
  {
    src:imgBig4,
    title :"Татьяна Флеганова",
    description:"Одна я в пальто стою красивая, а вокруг…"
  }
]
export const Contacts = () => {
  return (
    <S.Contacts>
      <Container>
        <FlexWrapper direction="column">
          <S.Text>
            <SectionTitle color="#FFF">О нас</SectionTitle>
            <span>
              Приём-приём! Как слышно? Мы уже в эфире? Отлично, поехали!
            </span>
            <S.Description>
              Друзья, мы будем очень рады, если вы поможете стать нам лучше.
              Нам важен каждый слушатель, поэтому вы можете поделиться обратной
              связью о наших предеачах, темах, подборках и вообще обо всём!
              Это можно сделать либо написав нам в форме ниже, либо кликнув
              на наши соцсети в подвале сайта. Спасибо! Услышимся!:)
            </S.Description>
          </S.Text>
          <S.ContactContent>
           {ContactsData.map((c,index)=> {
            return (
            <Contact
              src={c.src}
              key = {index}
              title={c.title}
              description={c.description}
            />
            )
           })} 
           
            
          </S.ContactContent>

          <S.Form>
            <S.Input
              placeholder="Что скажете?"
              as={"textarea"}
            ></S.Input>
            <S.InputContent>
              <S.Input placeholder="Имя" />
              <S.Input placeholder="Email" />
            </S.InputContent>
            <StyledButton>Отправить</StyledButton>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};

