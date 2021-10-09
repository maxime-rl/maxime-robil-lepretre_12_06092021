import React, { useEffect, useState } from "react";
import { fetchUserActivity } from "../../../services/fetchSportSeeAPI";
import { changeDayKeyActivitySessions } from "../../../services/utils/activity/changeDayKeyActivitySessions";
import * as S from "./BarChartDailyActivity.styled";
import { variablesStyle } from "../../../utils/styles/variables";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Create a BarChartDailyActivity component
 * @function BarChartDailyActivity
 * @param {string} userId
 */
export default function BarChartDailyActivity({ userId }) {
  const [data, setData] = useState([]);

  /**
   * Activity data recovery
   * @requires module:services/fetchSportSeeAPI
   * @requires module:services/utils/activity/changeDatesActivitySessions
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await fetchUserActivity(userId);
      const dataActivitySessions = response.sessions;

      changeDayKeyActivitySessions(dataActivitySessions);

      setData(dataActivitySessions);
    };
    getData();
  }, [userId]);

  return (
    <S.container>
      <S.header>
        <S.h3>Activité quotidienne</S.h3>
        <S.div>
          <S.p>Poids (kg)</S.p>
          <S.p color="true">Calories brûlées (kCal)</S.p>
        </S.div>
      </S.header>
      {/* START BarChart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          width={684}
          height={262.5}
          barGap={8}
          barCategoryGap={25}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
        >
          <CartesianGrid
            strokeDasharray="1 1"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            yAxisId="kg"
            dataKey="day"
            allowDecimals={false}
            dy={10}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            datakey="kilogram"
            orientation="right"
            domain={[
              Math.min(...data.map((elt) => elt.kilogram)) - 1,
              Math.max(...data.map((elt) => elt.kilogram)) + 1,
            ]}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="kCal"
            datakey="calories"
            domain={[
              Math.min(...data.map((elt) => elt.calories)) - 20,
              Math.max(...data.map((elt) => elt.calories)) + 20,
            ]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill={`${variablesStyle.colorGrayDarken}`}
            radius={[25, 25, 0, 0]}
            animationDuration={1300}
          />
          <Bar
            yAxisId="kCal"
            dataKey="calories"
            fill={`${variablesStyle.colorPrimary}`}
            radius={[25, 25, 0, 0]}
            animationDuration={1300}
          />
        </BarChart>
      </ResponsiveContainer>
      {/* END BarChart */}
    </S.container>
  );
}

/**
 * Create a CustomTooltip to BarChart
 * @function CustomTooltip
 * @param {bollean} active
 * @param {array} payload
 */
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <S.tooltipContainer>
        <S.tooltipElt>{`${payload[0].value} kg`}</S.tooltipElt>
        <S.tooltipElt>{`${payload[1].value} kCal`}</S.tooltipElt>
      </S.tooltipContainer>
    );
  }

  return null;
}

/**
 * PropTypes for the BarChartDailyActivity & CustomTooltip
 */
BarChartDailyActivity.propTypes = {
  userId: PropTypes.string.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
