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
import { getUserMockedData } from "../../services/fetchSportSeeMockedData";

/**
 * Create a UserDashboardPage page component
 * @function UserDashboardPage
 */
export default function UserDashboardPage() {
  const [data, setData] = useState([]);
  let { userId } = useParams();

  /**
   * Default data recovery
   * @requires module:services/getUserMockedData
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserMockedData(userId);

      setData(response.data);
    };
    getData();
  }, [userId]);

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
