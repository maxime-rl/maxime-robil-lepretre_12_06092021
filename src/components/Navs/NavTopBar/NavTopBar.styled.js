import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";
import { Link } from "react-router-dom";

export const nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${variablesStyle.colorBlack};
  @media (min-width: 560px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75px;
  }
  @media (min-width: 1024px) {
    min-height: 90px;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 20px 15px;
  height: 100%;
  color: ${variablesStyle.colorWhite};
  background: ${variablesStyle.colorBlack};
  @media (min-width: 560px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
  }
  @media (min-width: 1024px) {
    padding: 0 30px;
  }
`;

export const li = styled.li`
  padding: 0 0 10px 0;
  &:first-child {
    padding: 0 0 20px 0;
    @media (min-width: 560px) {
      padding: 0;
    }
  }
  @media (min-width: 560px) {
    padding: 0;
  }
  &:last-child {
    @media (min-width: 768px) {
      padding: 0 25px 0 0;
    }
    @media (min-width: 1024px) {
      padding: 0 50px 0 0;
    }
  }
`;

export const a = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const img = styled.img`
  width: 115px;
  @media (min-width: 1024px) {
    width: 145px;
  }
`;
