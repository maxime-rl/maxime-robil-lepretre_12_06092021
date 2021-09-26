import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.div`
  grid-area: chart-score;
  position: relative;
  margin: 7.5px auto;
  max-width: 258px;
  width: 258px;
  height: 258px;
  background-color: ${variablesStyle.colorGrayLighten};
  border-radius: ${variablesStyle.radius};
  @media (min-width: 1024px) {
    margin: 7.5px 7.5px 0 7.5px;
    width: 218px;
    height: 218px;
  }
  @media (min-width: 1440px) {
    margin: 15px 15px 0 15px;
    width: 258px;
    height: 258px;
  }
`;

export const h3 = styled.h3`
  position: absolute;
  padding: 0 15px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
`;

export const backgroundCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  width: 140px;
  height: 140px;
`;

export const label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const percentage = styled.span`
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: 600;
`;

export const span = styled.span`
  max-width: 60px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  opacity: 0.5;
`;
