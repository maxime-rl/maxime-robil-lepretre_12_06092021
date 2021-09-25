import React, { useEffect, useState } from "react";
import { getUserFetchData } from "../../../services/fetchSportSeeAPI";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import * as S from "./PieChartScore.styled";
import { variablesStyle } from "../../../utils/styles/variables";
import PropTypes from "prop-types";

/**
 * Create a PieChartScore component
 * @function PieChartScore
 * @param {string} userId
 */
export default function PieChartScore({ userId }) {
  const [data, setData] = useState([]);

  /**
   * Score data recovery
   * @requires module:services/fetchSportSeeAPI
   * @returns {object} data
   */
  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId);
      const scoreData = response.data;

      setData(scoreData);
    };
    getData();
  }, [userId]);

  /**
   * Transformation of score data into percentage
   */
  const percentageScoreValue = (data.todayScore || data.score) * 100;

  /**
   * Array with a new score used for the comparison between score data and 1
   */
  const score = [
    {
      scoreValue: data.todayScore || data.score,
    },
    {
      scoreValue: 1 - (data.todayScore || data.score),
    },
  ];

  return (
    <S.container>
      <S.h2>Score</S.h2>
      <S.backgroundCircle>
        <S.label>
          <S.percentage>{percentageScoreValue}%</S.percentage>
          <S.span>de votre objectif</S.span>
        </S.label>
      </S.backgroundCircle>
      {/* START PieChart */}
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <PieChart width={258} height={258}>
          <Pie
            data={score}
            dataKey="scoreValue"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            fill="transparent"
            stroke="transparent"
          >
            <Cell fill={`${variablesStyle.colorPrimary}`} cornerRadius={50} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* END PieChart */}
    </S.container>
  );
}

/**
 * PropTypes for the PieChartScore component
 */
PieChartScore.propTypes = {
  userId: PropTypes.string.isRequired,
};
