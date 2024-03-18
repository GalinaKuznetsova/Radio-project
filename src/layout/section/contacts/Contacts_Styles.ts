import styled from "styled-components";
import spiral from "./../../../assets/images/contacts/Spiral.svg"
import dawn from "./../../../assets/images/contacts/Dawn.svg"
import { theme } from "../../../Components/styles/Theme";

const Contacts = styled.section`
 `;
const Text = styled.div`
  width: 100%;
  padding-bottom: 30px;

  position: relative;

  ::after {
    content: url(${spiral});
    position: absolute;
    top: 18px;
    right: 265px;
}

 ::before {
    content: url(${dawn});
    position: absolute;
    top: 18px;
    right:0;
  }

  @media ${theme.media.tablet}{
    ::after{
     opacity: 0;
    }
  }
`;
const Description = styled.p`
  color: #a1a6b4;
  font-size: 20px;
  font-weight: 400;
  width: 60%;
`;
const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 11px;
`
const Contact = styled.div`
max-width:397px;
min-width: 113px;
/* min-width:113px; */
`;

const Img = styled.img`
 /* max-width: 397px;
  width: 100%;
  min-height: 280px; */
  object-position: top center ;
  object-fit: cover;`;
const ContactText = styled.div`
padding:30px 0;`;

const ContactTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 500;`;

const ContactDescription = styled.p`
color: #A1A6B4;
font-size: 16px;
font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  max-width: 920px;
  width: 100%;

  textarea {
    resize: none;
    height: 150px;
    padding: 30px 32px;
  }
`;
const InputContent = styled.div`
display: flex;
justify-content:space-between;
 gap: 30px;
flex-wrap: wrap;
 `
const Input = styled.input`
  color: #a1a6b4;

  font-family: "Muller", sans-serif;
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  border: 1px solid #fff;
  width: 100%;
  padding: 10px 32px;
  background: #121723;

  &::placeholder {
    color: #a1a6b4;
    font-size: 20px;
    font-weight: 400;
  }

  &:focus-visible {
    outline: 2px solid #fff;
  }
`;



export const S = {
    Contacts,
    Text,
    Description,
    Form,
    InputContent,
    Input,
    ContactContent,
    Contact,
    Img,
    ContactText,
    ContactTitle,
    ContactDescription
    

}
