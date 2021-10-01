import React from "react";
import Card from "../MacroCard/MacroCard";
import PropTypes from "prop-types";
import * as S from "./MacroCardList.styled";

// Utils
import addCommaAfterFirstDigit from "../../../utils/addCommaAfterFirstDigit";
// Icons
import iconCalories from "../../../assets/icons/macros/icon-calories.svg";
import iconCarbohydrates from "../../../assets/icons/macros/icon-carbohydrates.svg";
import iconLipids from "../../../assets/icons/macros/icon-lipids.svg";
import iconProteins from "../../../assets/icons/macros/icon-proteins.svg";

/**
 * Create a MacroCardList component
 * @function MacroCardList
 * @param {object} keyData
 * */
export default function MacroCardList({ keyData }) {
  const totalCalories = addCommaAfterFirstDigit(keyData.calorieCount);

  return (
    <S.container>
      {Object.entries(keyData).map(([type, value]) => (
        <Card
          key={`${type}-${value}`}
          iconBackgroundColor={
            type === "calorieCount"
              ? "#fbeaea"
              : type === "proteinCount"
              ? "#4AB8FF1A"
              : type === "carbohydrateCount"
              ? "#F9CE2310"
              : "#FD51811A"
          }
          iconSrc={
            type === "calorieCount"
              ? iconCalories
              : type === "proteinCount"
              ? iconProteins
              : type === "carbohydrateCount"
              ? iconCarbohydrates
              : iconLipids
          }
          macroType={
            type === "calorieCount"
              ? "Calories"
              : type === "proteinCount"
              ? "Protéines"
              : type === "carbohydrateCount"
              ? "Glucides"
              : "Lipides"
          }
          value={type === "calorieCount" ? totalCalories + "kCal" : value + "g"}
        />
      ))}
    </S.container>
  );
}

/**
 * PropTypes for the MacroCardList component
 */
MacroCardList.propTypes = {
  keyData: PropTypes.objectOf(PropTypes.number).isRequired,
};
