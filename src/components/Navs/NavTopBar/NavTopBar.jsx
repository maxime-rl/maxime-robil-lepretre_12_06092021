import React from "react";
import * as S from "./NavTopBar.styled";
import logo from "../../../assets/logo.svg";

export default function NavBar() {
  return (
    <S.nav aria-label="Global de l'application">
      <S.ul>
        <S.li>
          <S.a href="/#">
            <S.img src={logo} alt="logo SportSee" />
          </S.a>
        </S.li>
        <S.li>
          <a href="/#">Accueil</a>
        </S.li>
        <S.li>
          <a href="/#">Profil</a>
        </S.li>
        <S.li>
          <a href="/#">Réglage</a>
        </S.li>
        <S.li>
          <a href="/#">Communauté</a>
        </S.li>
      </S.ul>
    </S.nav>
  );
}
