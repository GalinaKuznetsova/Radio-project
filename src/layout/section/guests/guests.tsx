import React from "react";
import styled from "styled-components";
import { Container } from "../../../Components/Contatiner";
import { SectionTitle } from "../../../Components/SectionTitle";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import img1 from "../../../assets/images/guests/image-1.webp";
import img2 from "../../../assets/images/guests/image-2.webp";
import img3 from "../../../assets/images/guests/image-3.webp";
import { Guest } from "./guest/guest";
import {S} from "./Guests_Styles"
const GuestsData = [
  {
    src:img1,
    title :"Ольга Мартынова",
    description :"Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года."

  },
  {
    src:img2,
    title :"Денис Гришин",
    description :"Однозначно, элементы политического процесса являются только методом политического участия и смешаны с не уникальными данными до степени совершённой неузнаваемости, из-за чего возрастает их статус бесполезности."
  },
  {
    src:img3,
    title :"Ольга Мартыновая",
    description : "С другой стороны, высококачественный прототип будущего проекта выявляет срочную потребность дальнейших направлений развития. В рамках спецификации современных стандартов, реплицированные с зарубежных источников."
  }
]

export const Guests = () => {
  return (
    <S.Guests>
      <Container>
        <SectionTitle color="white">Гости</SectionTitle>
        <S.SmallText>У нас бывают:</S.SmallText>
        <S.Description>Блогеры, арт-критики и деятели искусства, музыканты, молодые учёные и люди науки, историки, филологи и много других интересных гостей!</S.Description>
        <FlexWrapper direction = "column" gap="50px">
          { GuestsData.map((g,index)=>{
            return (<Guest
              src={g.src}
              key = {index}
              title={g.title}
              description={g.description}
            />
            )})
          }
        </FlexWrapper>
      </Container>
    </S.Guests>
  );
};

