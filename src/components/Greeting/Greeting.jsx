import React from "react";
import PropTypes from "prop-types";
import * as S from "./Greeting.styled";

export default function Greeting({ firstName }) {
  return (
    <>
      <S.h2>
        Bonjour <S.userFirstName>{firstName}</S.userFirstName>
      </S.h2>
      <S.p>Félicitations ! Vous avez explosé vos objectifs hier 👏</S.p>
    </>
  );
}

/**
 * PropTypes for the Greeting component
 */
Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
};
