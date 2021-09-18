import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 7.5px;
  width: 185px;
  height: 94px;
  background-color: ${variablesStyle.colorGrayLighten};
  border-radius: ${variablesStyle.radius};
  @media (min-width: 1440px) {
    margin: 15px;
    width: 258px;
    height: 124px;
  }
`;

export const iconBackground = styled.div`
  position: relative;
  margin-left: 25px;
  width: 45px;
  height: 45px;
  background: ${(props) => props.color};
  border-radius: ${variablesStyle.radius};
  @media (min-width: 1440px) {
    margin-left: 45px;
    width: 60px;
    height: 60px;
  }
`;

export const i = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 15px;
  width: 15px;
  height: 15px;
  transform: translate(-50%, -50%);
`;

export const infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 20px;
`;

export const value = styled.span`
  padding: 2px 0;
  font-size: 1.6rem;
  font-weight: 700;
  @media (min-width: 1440px) {
    padding: 4px 0;
    font-size: 1.4rem;
  }
`;

export const type = styled.span`
  padding: 2px 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${variablesStyle.colorGray};
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1440px) {
    padding: 4px 0;
  }
`;
