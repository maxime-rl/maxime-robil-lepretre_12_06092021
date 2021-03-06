import React from "react";
import PropTypes from "prop-types";
import * as S from "./MacroCard.styled";

/**
 * Create a MacroCard component
 * @function MacroCard
 * @param {string} iconBackgroundColor
 * @param {string} iconSrc
 * @param {string} value
 * @param {string} macroType
 * */
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

/**
 * PropTypes for the MacroCard component
 */
MacroCard.propTypes = {
  iconBackgroundColor: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  macroType: PropTypes.string.isRequired,
};
