import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  NavActivities,
  Greeting,
  MacroCardList,
  BarChartDailyActivity,
  LineChartAverageSessions,
  RadarChartPerformances,
} from "../../components";
import * as S from "./UserDashboardPage.styled";
import { getUserFetchData } from "../../services/fetchSportSeeAPI";

/**
 * Create a UserDashboardPage page component
 * @function UserDashboardPage
 */
export default function UserDashboardPage() {
  const [data, setData] = useState([]);
  let { userId } = useParams();

  /**
   * Default data recovery
   * @requires module:services/fetchSportSeeAPI
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId);
      if (!response) return console.log("response error");

      setData(response.data);
    };
    getData();
  }, [userId]);

  if (data.length === 0) return null;

  const { userInfos, keyData } = data;

  return (
    <>
      <NavActivities />
      <S.header>
        <Greeting firstName={userInfos.firstName} />
      </S.header>
      <MacroCardList keyData={keyData} />
      <BarChartDailyActivity userId={userId} />
      <LineChartAverageSessions userId={userId} />
      <RadarChartPerformances userId={userId} />
    </>
  );
}
