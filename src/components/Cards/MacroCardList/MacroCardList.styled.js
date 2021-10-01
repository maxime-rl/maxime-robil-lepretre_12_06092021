import styled from "styled-components";

export const container = styled.div`
  grid-area: macro-card-list;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 830px) {
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: inherit;

    div:first-child {
      margin-top: 0;
    }

    div:last-child {
      margin-bottom: 0;
    }
  }
`;
