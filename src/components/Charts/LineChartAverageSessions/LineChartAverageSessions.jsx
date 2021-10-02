import React, { useEffect, useState } from "react";
import { getUserFetchData } from "../../../services/fetchSportSeeAPI";
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
   * @requires module:services/fetchSportSeeAPI
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId, "average-sessions");
      const averageSessionsData = response.data.sessions;

      setData(averageSessionsData);
    };
    getData();
  }, [userId]);

  /**
   * Create new object for the initials of the days of the week
   */
  const daysOfTheWeek = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  /**
   * Editing data using the initials of the days of the week
   */
  const averageSessions = data.map((elt) => ({
    day: daysOfTheWeek[elt.day],
    sessionLength: elt.sessionLength,
  }));

  return (
    <S.container>
      <S.h3>Durée moyenne des sessions</S.h3>
      {/* START LineChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <LineChart
          data={averageSessions}
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
