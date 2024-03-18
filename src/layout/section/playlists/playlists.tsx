import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../Components/SectionTitle";
import { Container } from "../../../Components/Contatiner";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import img1 from "../../../assets/images/playlists/image-1 .webp";
import img2 from "../../../assets/images/playlists/image-2.webp";
import img3 from "../../../assets/images/playlists/image-3.webp";
import img4 from "../../../assets/images/playlists/image-4.webp";
import img5 from "../../../assets/images/playlists/image-5.webp";
import img6 from "../../../assets/images/playlists/image-6.webp";
import img7 from "../../../assets/images/playlists/image-7.webp";
import img8 from "../../../assets/images/playlists/image-8.webp";
import img9 from "../../../assets/images/playlists/image-9.webp";
import img10 from "../../../assets/images/playlists/image-10.webp";
import img11 from "../../../assets/images/playlists/image-11.webp";
import img12 from "../../../assets/images/playlists/image-12.webp";
import { Playlist } from "./playlist/playlist";
import { Icon } from "../../../Components/icon/icon";
import { S } from "./Playlists_Styles";

const PlaylistsData = [
  {
    src: img1,
    title: "Ploho",
    description: "3 последних альбома",
    iconId: "russianFlag",
  },
  {
    src: img2,
    title: "Molchat Doma",
    description: "Все песни",
    iconId: "russianFlag",
  },
  {
    src: img3,
    title: "Motorama",
    description: "Все синглы",
    iconId: "russianFlag",
  },
  {
    src: img4,
    title: "Human Tetris",
    description: "3 последних альбома",
    iconId: "russianFlag",
  },
  {
    src: img5,
    title: "Буерак",
    description: "Все EP",
    iconId: "russianFlag",
  },
  {
    src: img6,
    title: "Июльские Дни",
    description: "Альбом «Колокол»",
    iconId: "russianFlag",
  },
  {
    src: img7,
    title: "Joy Division",
    description: "Лучшее за всё время",
    iconId: "GreatBritainFlag",
  },
  {
    src: img8,
    title: "The Cure",
    description: "Лучшее за всё время",
    iconId: "GreatBritainFlag",
  },
  {
    src: img9,
    title: "The Smiths",
    description: "Период 1984–1988",
    iconId: "GreatBritainFlag",
  },
  {
    src: img10,
    title: "New Order",
    description: "Хиты",
    iconId: "GreatBritainFlag",
  },
  {
    src: img11,
    title: "Bauhaus",
    description: "Все синглы",
    iconId: "GreatBritainFlag",
  },
  {
    src: img12,
    title: "Gang Of Four",
    description: "3 последних альбома",
    iconId: "GreatBritainFlag",
  },
];

export const Playlists = () => {
  return (
    <S.Playlists>
      <Container>
        <SectionTitle>Плейлисты</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          <S.Text>
            <S.Description>
              Раздел «Плейлисты» может содержать информацию, не предназначенную
              для несовершеннолетних
            </S.Description>
            <S.SmallText>© 2021 l W-Wave</S.SmallText>
            <Icon iconId={"age"} width="30" height="30" viewBo="0 0 30 30" />
          </S.Text>
          <S.PlaylistContent>
            {PlaylistsData.map((p, index) => {
              return (
                <Playlist
                  src={p.src}
                  key={index}
                  title={p.title}
                  description={p.description}
                  iconId={p.iconId}
                />
              );
            })}
          </S.PlaylistContent>
        </FlexWrapper>
      </Container>
    </S.Playlists>
  );
};
