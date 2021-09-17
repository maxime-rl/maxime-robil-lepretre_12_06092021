import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavActivities, Greeting } from "../../components";
import * as S from "./UserDashboardPage.styled";
import { getUserFetchData } from "../../services/fetchSportSeeAPI";

export default function UserDashboardPage() {
  const [data, setData] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await getUserFetchData(userId);
      if (!response) return console.log("response error");

      setData(response.data);
    };
    getData();
  }, [userId]);

  if (data.length === 0) return null;

  return (
    <>
      <NavActivities />
      <S.header>
        <Greeting firstName={data.userInfos.firstName} />
      </S.header>
    </>
  );
}
