import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./NavTopBar.styled";
import logo from "../../../assets/logo.svg";

/**
 * Create a NavTopBar component
 * @function NavTopBar
 * */
export default function NavTopBar() {
  return (
    <S.nav aria-label="Global de l'application">
      <S.ul>
        <S.li>
          <S.a to="/">
            <S.img src={logo} alt="logo SportSee" />
          </S.a>
        </S.li>
        <S.li>
          <NavLink exact activeClassName="active-link" to="/">
            Accueil
          </NavLink>
        </S.li>
        <S.li>
          <NavLink activeClassName="active-link" to="/profil">
            Profil
          </NavLink>
        </S.li>
        <S.li>
          <NavLink activeClassName="active-link" to="/setting">
            Réglage
          </NavLink>
        </S.li>
        <S.li>
          <NavLink activeClassName="active-link" to="/about">
            Communauté
          </NavLink>
        </S.li>
      </S.ul>
    </S.nav>
  );
}
