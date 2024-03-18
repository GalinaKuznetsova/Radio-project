import React from "react";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import { Icon } from "../../../../Components/icon/icon";
import { S } from "./../Playlists_Styles";

type PlaylistPropsType = {
  src: string;
  title: string;
  description: string;
  iconId: string;
};
export const Playlist = (props: PlaylistPropsType) => {
  return (
    <S.Playlist>
      <FlexWrapper direction="column">
        <Icon
          width="24px"
          height="20px"
          viewBo="0 0 21 20"
          iconId={props.iconId}
        />
        <S.PlaylistImg src={props.src} alt="" />
        <S.PlaylistText>
          <S.PlaylistTitle>{props.title}</S.PlaylistTitle>
          <S.PlaylistDescrition>{props.description}</S.PlaylistDescrition>
        </S.PlaylistText>
      </FlexWrapper>
    </S.Playlist>
  );
};
