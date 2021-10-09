/**
 * Function to change day key (date) to user activity sessions
 * @param {Array} data activity sessions key elt
 * @returns {object} sessions with new day key (number) to display on the chart
 */
export const changeDayKeyActivitySessions = (dataActivitySessions) => {
  for (let i = 0; i < dataActivitySessions.length; i++) {
    dataActivitySessions[i] = {
      ...dataActivitySessions[i],
      day: i + 1,
    };
  }
};
