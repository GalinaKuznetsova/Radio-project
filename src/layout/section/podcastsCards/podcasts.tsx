import React from "react";
import { SectionTitle } from "../../../Components/SectionTitle";
import { Container } from "../../../Components/Contatiner";
import { Podcast } from "./podcast/podcast";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import img1 from "../../../assets/images/podcasts/img-1.webp";
import img2 from "../../../assets/images/podcasts/img-2.webp";
import img3 from "../../../assets/images/podcasts/img-3.webp";
import img4 from "../../../assets/images/podcasts/img-4.webp";
import img5 from "../../../assets/images/podcasts/img-5.webp";
import img6 from "../../../assets/images/podcasts/img-6.webp";
import img7 from "../../../assets/images/podcasts/img-7.webp";
import img8 from "../../../assets/images/podcasts/img-8.webp";
import imgMobile1 from "../../../assets/images/podcasts/imgMobile1.png";
import imgMobile2 from "../../../assets/images/podcasts/imgMobile2.png";
import imgMobile3 from "../../../assets/images/podcasts/imgMobile3.png";
import imgMobile4 from "../../../assets/images/podcasts/imgMobile4.png";
import imgMobile5 from "../../../assets/images/podcasts/imgMobile5.png";
import imgMobile6 from "../../../assets/images/podcasts/imgMobile6.png";
import imgMobile7 from "../../../assets/images/podcasts/imgMobile7.png";
import {S} from "./Podcast_Styles"

const PodcastsData = [
  {
    src: img1,
    srcMobile: imgMobile1,
    time: "15:43",
    title: "Европа. XIX век",
    authorName: "Дмитрий Гутенберг",
    data: "14 июня",
  },
  {
    src: img2,
    srcMobile: imgMobile2,
    time: "5:32",
    title: "О музыке",
    authorName: "Дмитрий Гутенберг",
    data: "11 июня",
  },
  {
    src: img3,
    srcMobile: imgMobile3,
    time: "8:54",
    title: "Люди сегодня",
    authorName: "Анна Васильева",
    data: "8 июня",
  },
  {
    src: img4,
    srcMobile: imgMobile4,
    time: "9:04",
    title: "Хэллоу, Африка!",
    authorName: "Пётр Дмитриевский",
    data: "5 июня",
  },
  {
    src: img5,
    srcMobile: imgMobile5,
    time: "7:03",
    title: "Обо всём",
    authorName: "Пётр Дмитриевский",
    data: "2 июня",
  },
  {
    src: img6,
    srcMobile: imgMobile6,
    time: "9:15",
    title: "Физика цвета",
    authorName: "Татьяна Флеганова",
    data: "28 мая",
  },
  {
    src: img7,
    srcMobile: imgMobile7,
    time: "16:04",
    title: "Источник звука",
    authorName: "Пётр Дмитриевский",
    data: "22 мая",
  },
  {
    src: img8,
    srcMobile: imgMobile7,
    time: "6:55",
    title: "Правила этикета",
    authorName: "Татьяна Флеганова",
    data: "18 мая",
  },
];

export const Podcasts = () => {
  
  return (
    <S.Podcasts>
      <Container>
      <SectionTitle> Подкасты</SectionTitle>
        <S.PodcastContent>
          {PodcastsData.map((p, index) => {
            return (
              <Podcast
                src={p.src}
                srcMobile = {p.srcMobile}
                time={p.time}
                key={index}
                title={p.title}
                authorName={p.authorName}
                data={p.data}
              />
            );
          })}
        </S.PodcastContent>
      </Container>
    </S.Podcasts>
  );
};


