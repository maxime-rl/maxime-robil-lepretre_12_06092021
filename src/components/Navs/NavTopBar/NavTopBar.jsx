import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.svg";
import { variablesStyle } from "../../../utils/styles/variables";

export default function NavBar() {
  return (
    <Nav aria-label="Global de l'application">
      <Ul>
        <Li>
          <A href="/#">
            <Img src={logo} alt="logo SportSee" />
          </A>
        </Li>
        <Li>
          <a href="/#">Accueil</a>
        </Li>
        <Li>
          <a href="/#">Profil</a>
        </Li>
        <Li>
          <a href="/#">Réglage</a>
        </Li>
        <Li>
          <a href="/#">Communauté</a>
        </Li>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  grid-area: nav-bar;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${variablesStyle.colorBlack};
  @media (min-width: 560px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75px;
  }
  @media (min-width: 1024px) {
    min-height: 90px;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 20px 15px;
  height: 100%;
  color: ${variablesStyle.colorWhite};
  background: ${variablesStyle.colorBlack};
  @media (min-width: 560px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
  }
  @media (min-width: 1024px) {
    padding: 0 30px;
  }
`;

const Li = styled.li`
  padding: 0 0 10px 0;
  &:first-child {
    padding: 0 0 20px 0;
    @media (min-width: 560px) {
      padding: 0;
    }
  }
  @media (min-width: 560px) {
    padding: 0;
  }
  &:last-child {
    @media (min-width: 768px) {
      padding: 0 25px 0 0;
    }
    @media (min-width: 1024px) {
      padding: 0 50px 0 0;
    }
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 115px;
  @media (min-width: 1024px) {
    width: 145px;
  }
`;
