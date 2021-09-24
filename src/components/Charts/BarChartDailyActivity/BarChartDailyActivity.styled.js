import styled from "styled-components";
import { variablesStyle } from "../../../utils/styles/variables";

export const section = styled.section`
  position: relative;
  background-color: ${variablesStyle.colorGrayLighten};
  border-radius: ${variablesStyle.radius};
  @media (min-width: 1024px) {
    width: 684px;
    height: 262.5px;
  }
`;

export const header = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: calc(100% - 20px);
`;

export const h2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${variablesStyle.colorGrayDarken};
`;

export const div = styled.div`
  display: flex;
`;

export const p = styled.p`
  position: relative;
  margin: 16px 0;
  font-size: 1.4rem;
  color: ${variablesStyle.colorGray};
  &::before {
    position: absolute;
    content: "";
    top: 4px;
    left: -18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.color
        ? `${variablesStyle.colorPrimary}`
        : `${variablesStyle.colorGrayDarken}`};
  }
  &:last-child {
    margin-left: 50px;
  }
`;
