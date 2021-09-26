import React from "react";
import * as S from "./HomePage.styled";

/**
 * Create a HomePage page component
 * @function HomePage
 */
export default function HomePage() {
  return (
    <>
      <S.main>
        <S.h1>Bienvenue sur SportSee</S.h1>
        <nav aria-label="Des différents utilisateurs disponibles">
          <S.ul>
            <S.li>
              <S.a to="/user/12">Utilisateur 12</S.a>
            </S.li>
            <li>
              <S.a to="/user/18">Utilisateur 18</S.a>
            </li>
          </S.ul>
        </nav>
      </S.main>
    </>
  );
}
