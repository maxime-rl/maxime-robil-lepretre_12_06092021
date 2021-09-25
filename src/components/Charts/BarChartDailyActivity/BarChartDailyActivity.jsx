import React, { useEffect, useState } from "react";
import { getUserFetchData } from "../../../services/fetchSportSeeAPI";
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
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId, "activity");
      const sessions = response.data.sessions;

      for (let i = 0, length = sessions.length; i < length; i++) {
        sessions[i] = {
          ...sessions[i],
          day: i + 1,
        };
      }

      setData(sessions);
    };
    getData();
  }, [userId]);

  return (
    <S.section>
      <S.header>
        <S.h2>Activité quotidienne</S.h2>
        <S.div>
          <S.p>Poids (kg)</S.p>
          <S.p color="true">Calories brûlées (kCal)</S.p>
        </S.div>
      </S.header>
      {/* START BarChart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
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
          <Tooltip />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill={`${variablesStyle.colorGrayDarken}`}
            radius={[25, 25, 0, 0]}
          />
          <Bar
            yAxisId="kCal"
            dataKey="calories"
            fill={`${variablesStyle.colorPrimary}`}
            radius={[25, 25, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      {/* END BarChart */}
    </S.section>
  );
}