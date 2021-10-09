import React, { useEffect, useState } from "react";
import { fetchUserPerformance } from "../../../services/fetchSportSeeMockedData";
import { changeKindKeyPerformance } from "../../../services/utils/performance/changeKindKeyPerformance";
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
   * @requires module:services/fetchSportSeeMockedData
   * @requires module:services/utils/performance/changeKindKeyPerformance
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await fetchUserPerformance(userId);
      const dataPerformance = response.data;

      changeKindKeyPerformance(dataPerformance);

      setData(dataPerformance);
    };
    getData();
  }, [userId]);

  return (
    <S.container>
      <h3 className="sr-only">Performances</h3>
      {/* START RadarChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={data}
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
