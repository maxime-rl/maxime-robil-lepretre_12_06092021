import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.section`
  position: relative;
  width: 258px;
  height: 258px;
  background-color: ${variablesStyle.colorPrimary};
  border-radius: ${variablesStyle.radius};
`;

export const h2 = styled.h2`
  position: absolute;
  padding: 18px 0 0 30px;
  max-width: 190px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: ${variablesStyle.colorWhite};
  opacity: 0.5;
`;
