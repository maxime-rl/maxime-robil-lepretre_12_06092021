import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  NavActivities,
  Greeting,
  MacroCardList,
  BarChartDailyActivity,
  LineChartAverageSessions,
  RadarChartPerformances,
  PieChartScore,
} from "../../components";
import * as S from "./UserDashboardPage.styled";
import { fetchUserInfos } from "../../services/fetchSportSeeAPI";
import ErrorPage from "../ErrorPage/ErrorPage";

/**
 * Create a UserDashboardPage page component
 * @function UserDashboardPage
 */
export default function UserDashboardPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  let { userId } = useParams();

  /**
   * Default data recovery
   * @requires module:services/fetchSportSeeAPI
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await fetchUserInfos(userId);

      if (!response) {
        setError(true);
      }

      setData(response);
    };
    getData();
  }, [userId]);

  if (error) return <ErrorPage />;
  if (data.length === 0) return null;

  const { userInfos, keyData } = data;

  return (
    <S.main>
      <NavActivities />
      <S.section>
        <h1 className="sr-only">Tableau de bord</h1>
        <S.header>
          <Greeting firstName={userInfos.firstName} />
        </S.header>
        <S.userSportsInfo>
          <MacroCardList keyData={keyData} />
          {/* START Charts */}
          <S.chartsContainer>
            <BarChartDailyActivity userId={userId} />
            <LineChartAverageSessions userId={userId} />
            <RadarChartPerformances userId={userId} />
            <PieChartScore userId={userId} />
          </S.chartsContainer>
          {/* END Charts */}
        </S.userSportsInfo>
      </S.section>
    </S.main>
  );
}
