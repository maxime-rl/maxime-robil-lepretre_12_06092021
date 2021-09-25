import React from "react";
import PropTypes from "prop-types";

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

/**
 * PropTypes for the Greeting component
 */
Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
};
