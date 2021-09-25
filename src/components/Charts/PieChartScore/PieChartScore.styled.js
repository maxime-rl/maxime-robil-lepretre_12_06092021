import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.div`
  position: relative;
  width: 258px;
  height: 258px;
  background-color: ${variablesStyle.colorGrayLighten};
  border-radius: ${variablesStyle.radius};
`;

export const h2 = styled.h2`
  position: absolute;
  padding: 15px;
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
