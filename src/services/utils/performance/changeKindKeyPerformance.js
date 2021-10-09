/**
 * Function to change day key to user average sessions
 * @param {Array} data average sessions sessions key elt
 * @returns {object} sessions with new day key (letter) to display on the chart
 */
export const changeKindKeyPerformance = (dataPerformance) => {
  /**
   * Create new object for UI performance kind
   */
  const performanceKind = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  /**
   * Editing data with the new UI performance kind object
   */
  dataPerformance.map((elt) => ({
    value: elt.value,
    kind: performanceKind[elt.kind],
  }));
};
