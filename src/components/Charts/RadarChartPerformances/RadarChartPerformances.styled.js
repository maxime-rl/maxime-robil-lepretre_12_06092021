import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.div`
  grid-area: chart-performances;
  position: relative;
  margin: 7.5px auto;
  max-width: 258px;
  width: 258px;
  height: 258px;
  background-color: ${variablesStyle.colorGrayDarken};
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
