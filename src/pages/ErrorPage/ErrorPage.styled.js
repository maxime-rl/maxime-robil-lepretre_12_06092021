import styled from "styled-components";
import { Link } from "react-router-dom";

export const section = styled.section`
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
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const error = styled.span`
  margin-bottom: 60px;
  text-align: center;
  font-size: 58px;
`;

export const errorDescription = styled.span`
  max-width: 500px;
  text-align: center;
  font-size: 22px;
  line-height: 30px;
`;

export const a = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
`;
