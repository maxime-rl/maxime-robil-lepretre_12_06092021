import React from "react";
import * as S from "./NavActivities.styled";

/**
 * Create a NavActivities component
 * @function NavActivities
 * */
export default function NavActivities() {
  return (
    <S.nav aria-label="Activités tableau de bord">
      <S.ul>
        <S.li>
          <S.a to="/yoga" aria-label="Informations sur le yoga">
            <S.i yoga aria-hidden="true" title="Yoga" />
          </S.a>
        </S.li>
        <S.li>
          <S.a to="/natation" aria-label="Informations sur la natation">
            <S.i swimming aria-hidden="true" title="Natation" />
          </S.a>
        </S.li>
        <S.li>
          <S.a to="/cyclisme" aria-label="Informations sur le cyclisme">
            <S.i cycling aria-hidden="true" title="Cyclisme" />
          </S.a>
        </S.li>
        <S.li>
          <S.a to="/bodybuilding" aria-label="Informations sur le bodybuilding">
            <S.i aria-hidden="true" title="Bodybuilding" />
          </S.a>
        </S.li>
      </S.ul>
      <S.p>Copyright, SportSee 2020</S.p>
    </S.nav>
  );
}
