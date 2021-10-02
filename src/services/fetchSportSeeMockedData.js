import axios from "axios";

/**
 * @param {string} userId
 * @param {string} serviceType four type of service available :
 * "activity", "average-sessions", "performance", and user infos (first default service)
 * @returns data sportSee or error
 */
export async function getUserMockedData(userId, serviceType) {
  let endpoint = choiceOfEndpointToMockedData(userId, serviceType);

  try {
    const response = await axios.get(endpoint);

    return response.data;
  } catch (error) {
    console.error("Error from fetch: ", error);
  }
}

/**
 * Function for to direct to the right endpoint
 * @param {string} userId
 * @param {string} serviceType
 * @returns the endpoint matching with the selected type of service
 */
function choiceOfEndpointToMockedData(userId, serviceType) {
  let mockEndPoint = "";

  switch (serviceType) {
    case "activity":
      mockEndPoint = `/user/${userId}/activity.json`;
      break;

    case "average-sessions":
      mockEndPoint = `/user/${userId}/average-sessions.json`;
      break;

    case "performance":
      mockEndPoint = `/user/${userId}/performance.json`;
      break;

    default:
      mockEndPoint = `/user/${userId}.json`;
  }

  return mockEndPoint;
}
