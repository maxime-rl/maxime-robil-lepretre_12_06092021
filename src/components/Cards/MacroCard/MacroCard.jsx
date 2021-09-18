import React from "react";
import * as S from "./MacroCard.styled";

export default function MacroCard({
  iconBackgroundColor,
  iconSrc,
  value,
  macroType,
}) {
  return (
    <S.container>
      <S.iconBackground color={iconBackgroundColor}>
        <S.i src={iconSrc} aria-hidden="true" />
      </S.iconBackground>
      <S.infos>
        <S.value>{value}</S.value>
        <S.type>{macroType}</S.type>
      </S.infos>
    </S.container>
  );
}
