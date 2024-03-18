import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";
import { FlexWrapper } from "../../../Components/FlexWrapper";

const Playlists = styled.section`
 width: 100%;
  color: #a1a6b4;
  font-size: 16px;
  font-weight: 400;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
        flex-direction:column;
    }
  }
`;
const Text = styled.div`
width: 30%;


`;
const Description = styled.p``;
const SmallText = styled.span`
display:block`;

const PlaylistContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
gap: 30px;
justify-items:center;
 @media ${theme.media.tabletmin}{
  grid-template-columns: 1fr 1fr ;
 }



`

const Playlist = styled.div`
max-width: 160px;
min-width: 140px;
border: 1px solid #e6e8ec;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    }

@media ${theme.media.tablet} {
  max-width: 255px;
  width: 100%;
  flex-grow: 1;

    ${FlexWrapper} {
        flex-direction: row;
    }
    svg {
        left: 0;
    }
}
@media ${theme.media.mobile} {
    ${FlexWrapper} {
        flex-direction: column;
    }
    svg {
        right: 0;
    }
}
`;

const PlaylistImg = styled.img`
/* width: 100%;
  min-height: 112px; */
  @media ${theme.media.tablet} {
    max-width: 113px;
  }`;

const PlaylistText = styled.div`

   padding: 16px;

  @media ${theme.media.tablet} {
    padding: 40px 0 10px 10px ;
    /* max-width: 143px;
width: 100%; */
  }

  @media ${theme.media.mobile} {
    padding: 10px 10px;
  }
`;
const PlaylistTitle = styled.h3`
  color: #121723;
  font-size: 16px;
  font-weight: 500;
`;
const PlaylistDescrition = styled.p`
  font-size: 12px;
  font-weight: 400;
`;


export const S = {
    Playlists,
    Text,
    Description,
    SmallText,
    PlaylistContent,
    Playlist,
    PlaylistImg,
    PlaylistText,
    PlaylistTitle,
    PlaylistDescrition
}