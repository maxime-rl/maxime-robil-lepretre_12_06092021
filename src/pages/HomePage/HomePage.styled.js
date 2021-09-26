import styled from "styled-components";
import { Link } from "react-router-dom";

export const main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: calc(100vh - 203.5px);
  @media (min-width: 560px) {
    height: calc(100vh - 115px);
  }
`;

export const h1 = styled.h1`
  text-align: center;
  margin-bottom: 70px;
  font-size: 3.8rem;
  line-height: 44px;
  @media (min-width: 560px) {
    margin-bottom: 120px;
    font-size: 4.4rem;
  }
`;

export const ul = styled.ul`
  display: flex;
`;

export const li = styled.li`
  padding: 0 15px;
`;

export const a = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
