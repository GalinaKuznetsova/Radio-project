import React from "react";
import styled from "styled-components";
import { Container } from "../../../Components/Contatiner";
import { SectionTitle } from "../../../Components/SectionTitle";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { Broadcast } from "./broadcast/broadcast";
import img1 from "../../../assets/images/broadcast/image-1.webp";
import img2 from "../../../assets/images/broadcast/image-1-1.webp";
import img3 from "../../../assets/images/broadcast/image-1-2.webp";
import img4 from "../../../assets/images/broadcast/image-1-3.webp";
import img5 from "../../../assets/images/broadcast/image-1-4.webp";
import img6 from "../../../assets/images/broadcast/image-1-5.webp";
import { StyledButton } from "../../../Components/Styledbutton";
import mic from "../../../assets/images/broadcast/mic.webp";
import {S} from "./Broadcasts_Styles"
const BroadcastsData = [
  {
    src :img1,
    title : "О людях и книгах",
    description: "Анонсируется отдельно"
  },
  {
    src :img2,
    title : "Графомания td",
    description: "По понедельникам в 10:00"
  },
  {
    src :img3,
    title : "Не Рим, не Троя",
    description: "По вторникам в 12:00"
  },
  {
    src :img4,
    title : "Эрудит",
    description: "По пятницам в 17:00"
  },
  {
    src :img5,
    title : "Тонкости эпох",
    description: "По субботам в 10:00"
  },
  {
    src :img6,
    title : "Живые мысли",
    description: "По воскресеньям в 15:30"
  },
]

export const Broadcasts = () => {
  return (
    <S.Broadcasts>
      <Container>
      <SectionTitle>Передачи</SectionTitle>
           <FlexWrapper justify="space-between" gap="30px">
          <S.BroadcastsContent>
            <S.BroadcastsImg src={mic} alt="" />
            <div>
            <StyledButton color="black" background="white" border="black">
              Архив
            </StyledButton>
            <S.Information>
           В архив попадают все передачи, которые вы пропустили! Enjoy:)
            </S.Information>
            </div>
          </S.BroadcastsContent>
          <S.BroadcastContent>
        {BroadcastsData.map((b,index) => {
          return ( <Broadcast
          src = {b.src}
          title ={b.title}
          description= {b.description}
          key={index}
         /> )
        })}
          </S.BroadcastContent>
        </FlexWrapper>
      </Container>
    </S.Broadcasts>
  );
};

