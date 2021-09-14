import React from "react";

export default function Greeting({ firstName }) {
  return (
    <>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
}
