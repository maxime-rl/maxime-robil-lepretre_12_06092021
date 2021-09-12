import React from "react";
import * as S from "./styles";
import logo from "../../../assets/logo.svg";

export default function NavBar() {
  return (
    <S.Nav aria-label="Globale de l'application">
      <S.Ul>
        <S.Li>
          <S.A href="/#">
            <S.Img src={logo} alt="logo SportSee" />
          </S.A>
        </S.Li>
        <S.Li>
          <a href="/#">Accueil</a>
        </S.Li>
        <S.Li>
          <a href="/#">Profil</a>
        </S.Li>
        <S.Li>
          <a href="/#">Réglage</a>
        </S.Li>
        <S.Li>
          <a href="/#">Communauté</a>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
}
