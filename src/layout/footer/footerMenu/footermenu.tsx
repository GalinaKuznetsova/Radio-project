import React from "react";
import { S } from "../Footer_Styles";

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
    title: "Сетка",
    href: "Сетка",
  },
  {
    title: "О нас",
    href: "О нас",
  },
  {
    title: "Новости",
    href: "Новости",
  },
  {
    title: "Блоги",
    href: "Блоги",
  },
  {
    title: "Топы",
    href: "Топы",
  },
];

export const FooterMenu: React.FC = () => {
  return (
    <S.MenuList>
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink href={item.href}>
              {item.title}
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </S.MenuList>
  );
};
