/**
 * Function to change day key to user average sessions
 * @param {Array} data average sessions sessions key elt
 * @returns {object} sessions with new day key (letter) to display on the chart
 */
export const changeDayKeyAverageSessions = (dataAverageSessions) => {
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
  dataAverageSessions.map((elt) => ({
    day: daysOfTheWeek[elt.day],
    sessionLength: elt.sessionLength,
  }));
};
