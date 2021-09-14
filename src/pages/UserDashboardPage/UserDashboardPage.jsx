import React from "react";
import { useParams } from "react-router";
import { NavActivities, Greeting } from "../../components";
import * as S from "./UserDashboardPage.styled";

export default function UserDashboardPage() {
  let { userId } = useParams();

  return (
    <>
      <NavActivities />
      <S.header>
        <Greeting firstName={userId} />
      </S.header>
    </>
  );
}
