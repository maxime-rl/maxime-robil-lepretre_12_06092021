import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.div`
  grid-area: chart-average-sessions;
  position: relative;
  margin: 7.5px auto;
  max-width: 258px;
  width: 258px;
  height: 258px;
  background-color: ${variablesStyle.colorPrimary};
  border-radius: ${variablesStyle.radius};
  @media (min-width: 1024px) {
    margin: 7.5px 7.5px 0 0;
    width: 218px;
    height: 218px;
  }
  @media (min-width: 1440px) {
    margin: 15px 15px 0 0;
    width: 258px;
    height: 258px;
  }
`;

export const h3 = styled.h3`
  position: absolute;
  padding: 18px 0 0 30px;
  max-width: 190px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: ${variablesStyle.colorWhite};
  opacity: 0.5;
`;
