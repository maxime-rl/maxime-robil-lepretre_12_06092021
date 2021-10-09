import React, { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../../services/fetchSportSeeMockedData";
import { changeDayKeyAverageSessions } from "../../../services/utils/averageSessions/changeDayKeyAverageSessions";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import * as S from "./LineChartAverageSessions.styled";
import PropTypes from "prop-types";
import { variablesStyle } from "../../../utils/styles/variables";

/**
 * Create a LineChartAverageSessions component
 * @function LineChartAverageSessions
 * @param {string} userId
 */
export default function LineChartAverageSessions({ userId }) {
  const [data, setData] = useState([]);

  /**
   * Average-sessions data recovery
   * @requires module:services/fetchSportSeeMockedData
   * @requires module:services/utils/averageSessions/changeDayKeyAverageSessions
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await fetchUserAverageSessions(userId);
      const dataAverageSessions = response.sessions;

      changeDayKeyAverageSessions(dataAverageSessions);

      setData(dataAverageSessions);
    };
    getData();
  }, [userId]);

  return (
    <S.container>
      <S.h3>Durée moyenne des sessions</S.h3>
      {/* START LineChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <LineChart
          data={data}
          width={258}
          height={258}
          margin={{ top: 0, right: 15, left: 15, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            dy={20}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={[0, "dataMax + 80"]}
          ></YAxis>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: `${variablesStyle.colorPrimaryDarken}`,
              strokeWidth: 30,
            }}
          />
          <Line
            dataKey="sessionLength"
            type={"natural"}
            dot={false}
            stroke="#D8D8D8"
            strokeWidth={2}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.3)",
              strokeWidth: 4,
              r: 6,
            }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* END LineChart */}
    </S.container>
  );
}

/**
 * Create a CustomTooltip to LineChart
 * @function CustomTooltip
 * @param {bollean} active
 * @param {array} payload
 */
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <S.tooltipContainer>{`${payload[0].value} min`}</S.tooltipContainer>;
  }

  return null;
}

/**
 * PropTypes for the LineChartAverageSessions & CustomTooltip
 */
LineChartAverageSessions.propTypes = {
  userId: PropTypes.string.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
