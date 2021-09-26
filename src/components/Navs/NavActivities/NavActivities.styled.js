import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";
import iconBodybuilding from "../../../assets/icons/activities/icon-bodybuilding.svg";
import iconCycling from "../../../assets/icons/activities/icon-cycling.svg";
import iconSwimming from "../../../assets/icons/activities/icon-swimming.svg";
import iconYoga from "../../../assets/icons/activities/icon-yoga.svg";

export const nav = styled.nav`
  position: fixed;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  min-height: 75px;
  background: ${variablesStyle.colorBlack};
  @media (min-width: 1024px) {
    position: inherit;
    flex-direction: column;
    justify-content: flex-start;
    left: 0;
    bottom: 0;
    top: 0;
    max-width: 110px;
  }
  @media (min-width: 1440px) {
    justify-content: center;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 20px 15px;
  height: 100%;
  color: ${variablesStyle.colorWhite};
  background: ${variablesStyle.colorBlack};
  @media (min-width: 1024px) {
    flex-direction: column;
    height: 76%;
  }
  @media (min-width: 1440px) {
    height: 65%;
  }
`;

export const li = styled.li`
  margin: 0 15px;
  @media (min-width: 1024px) {
    margin: 10px 0;
  }
`;

export const a = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${variablesStyle.colorWhite};
  border-radius: 5px;
  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const i = styled.i`
  background-image: url(${(props) =>
    props.yoga
      ? `${iconYoga}`
      : props.swimming
      ? `${iconSwimming}`
      : props.cycling
      ? `${iconCycling}`
      : `${iconBodybuilding}`});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20px;
  width: 20px;
  height: 20px;
  @media (min-width: 1024px) {
    background-size: 30px;
    width: 30px;
    height: 30px;
  }
`;

export const p = styled.p`
  display: none;
  font-size: 12px;
  color: ${variablesStyle.colorWhite};
  @media (min-width: 1024px) {
    display: block;
    width: 150px;
    transform: rotate(-90deg);
  }
`;
