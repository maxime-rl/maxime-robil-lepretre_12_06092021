import React, { useEffect, useState } from "react";
import { getUserFetchData } from "../../../services/fetchSportSeeAPI";
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";
import * as S from "./RadarChartPerformances.styled";
import { variablesStyle } from "../../../utils/styles/variables";

/**
 * Create a RadarChartPerformances component
 * @function RadarChartPerformances
 * @param {string} userId
 */
export default function RadarChartPerformances({ userId }) {
  let [data, setData] = useState([]);

  /**
   * Performance data recovery
   * @requires module:services/fetchSportSeeAPI
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId, "performance");
      const dataPerformance = response.data.data;

      setData(dataPerformance);
    };
    getData();
  }, [userId]);

  const typeOfActivities = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  data = data.map((elt) => ({
    value: elt.value,
    kind: typeOfActivities[elt.kind],
  }));

  return (
    <S.container>
      {/* START RadarChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={data}
          height={258}
          width={258}
          margin={{ top: 15, right: 25, left: 25, bottom: 15 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            dy={4.5}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            stroke={`${variablesStyle.colorPrimary}`}
            fill={`${variablesStyle.colorPrimary}`}
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* END RadarChart */}
    </S.container>
  );
}
