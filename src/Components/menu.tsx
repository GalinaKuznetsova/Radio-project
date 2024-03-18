import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>Подкасты</li>
        <li>Передачи</li>
        <li>Гости</li>
        <li>Плейлисты</li>
        <li>О нас</li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 58.75px;
  }

  li {
    color: rgba(18, 23, 35, 1);
    font-size: 20px;
    font-weight: 400;
  }
`;
