import React, { useEffect, useState } from "react";
import { getUserMockedData } from "../../../services/fetchSportSeeMockedData";
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import * as S from "./RadarChartPerformances.styled";
import { variablesStyle } from "../../../utils/styles/variables";
import PropTypes from "prop-types";

/**
 * Create a RadarChartPerformances component
 * @function RadarChartPerformances
 * @param {string} userId
 */
export default function RadarChartPerformances({ userId }) {
  const [data, setData] = useState([]);

  /**
   * Performance data recovery
   * @requires module:services/getUserMockedData
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserMockedData(userId, "performance");
      const performancesData = response.data.data;

      setData(performancesData);
    };
    getData();
  }, [userId]);

  /**
   * Create new object for UI performance kind
   */
  const performanceKind = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  /**
   * Editing data with the new UI performance kind object
   */
  const performances = data.map((elt) => ({
    value: elt.value,
    kind: performanceKind[elt.kind],
  }));

  return (
    <S.container>
      <h3 className="sr-only">Performances</h3>
      {/* START RadarChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={performances}
          height={258}
          width={258}
          margin={{ top: 15, right: 25, left: 25, bottom: 15 }}
        >
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} />
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

/**
 * PropTypes for the RadarChartPerformances component
 */
RadarChartPerformances.propTypes = {
  userId: PropTypes.string.isRequired,
};
