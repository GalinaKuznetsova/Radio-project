import React from "react";

import { S } from "../Header_Styles"
import { MenuHeader } from "../menuHeader/MenuHeader";




export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <MenuHeader/>
    </S.DesktopMenu>
  );
};
