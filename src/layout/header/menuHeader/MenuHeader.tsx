
import React from "react";
import { S } from "../Header_Styles";

const items = [
  {
    title: "Подкасты",
    href: "Подкасты",
  },
  {
    title: "Передачи",
    href: "Передачи",
  },
  {
    title: "Гости",
    href: "Гости",
  },

  {
    title: "Плейлисты",
    href: "Плейлисты",
  },
  {
    title: "О нас",
    href: "О нас",
  },
];

export const MenuHeader: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink  href={item.href}
            >
              {item.title}
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
