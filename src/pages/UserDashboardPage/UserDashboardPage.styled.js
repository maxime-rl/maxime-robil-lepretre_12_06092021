import styled from "styled-components";

export const main = styled.main`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const section = styled.section`
  padding: 0 15px 120px 15px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 0 45px 15px;
    max-width: 900px;
  }
  @media (min-width: 1440px) {
    padding: 0 15px 55px 15px;
    max-width: 1150px;
  }
`;

export const header = styled.header`
  @media (min-width: 1024px) {
    margin: 20px 0;
  }
  @media (min-width: 1440px) {
    margin: 35px 0 55px 0;
  }
`;

export const userSportsInfo = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "charts-section macro-card-list"
      "charts-section macro-card-list";
  }
`;

export const chartsContainer = styled.div`
  grid-area: charts-section;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "chart-daily-activity chart-daily-activity chart-daily-activity"
      "chart-average-sessions chart-performances chart-score";
  }
`;
