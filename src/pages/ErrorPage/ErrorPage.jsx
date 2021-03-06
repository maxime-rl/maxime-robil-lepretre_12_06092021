import React from "react";
import * as S from "./ErrorPage.styled";

/**
 * Create a ErrorPage component
 * @function ErrorPage
 */
export default function ErrorPage() {
  return (
    <S.section>
      <S.h1>
        <S.error>404</S.error>
        <S.errorDescription>
          Oups ! La page que vous demandez n'existe pas, ou n'est pas encore
          disponible (MVP)
        </S.errorDescription>
      </S.h1>
      <S.a to="/">Retourner sur la page d'accueil</S.a>
    </S.section>
  );
}
