import React, { useState } from "react";
import { S } from "../Header_Styles";
import { MenuHeader } from "../menuHeader/MenuHeader";




export const MobileMenu: React.FC = () => {
  const[menuIsOpen,setmenuIsOpen]=useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen)
  }
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick = {()=>{setmenuIsOpen(false)}}>
      <MenuHeader />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
