import styled from "styled-components";
import { variablesStyle } from "../../utils/styles/variables";

export const h2 = styled.h2`
  display: flex;
  font-size: 2.5rem;
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1240px) {
    font-size: 4.5rem;
  }
`;

export const userFirstName = styled.span`
  padding: 0 0 0 10px;
  color: ${variablesStyle.colorPrimary};
`;

export const p = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  @media (min-width: 991px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
