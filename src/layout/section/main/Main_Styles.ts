
import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";

const Main = styled.section``;
const Text = styled.div`
`;
const Title = styled.h1``;

const Description = styled.p`
max-width: 628px;
width: 100%;
 margin: 14px 0 45px 0;

 @media ${theme.media.tabletmin} {
  margin: 14px 0 20px 0;
 }

`;

const Photo = styled.img`
max-width: 350px;
min-width: 256px;
min-height: 262px;
object-fit: cover;

@media ${theme.media.tabletmin} {
    display: none;
  }
`

export const S = {
    Main,
    Text,
    Title,
    Description,
    Photo
}