import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

/**
 * @param {string} userId
 * @param {string} serviceType four type of service available :
 * "activity", "average-sessions", "performance", and user infos (first default service)
 * @returns data sportSee or error
 */
export async function getUserFetchData(userId, serviceType) {
  let endpoint = choiceOfEndpoint(userId, serviceType);

  try {
    const response = await axiosInstance.get(endpoint);
    // const responseMocked = await axios.get("/data/data.json");

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
function choiceOfEndpoint(userId, serviceType) {
  let endPoint = "";

  switch (serviceType) {
    case "activity":
      endPoint = `user/${userId}/activity`;
      break;

    case "average-sessions":
      endPoint = `user/${userId}/average-sessions`;
      break;

    case "performance":
      endPoint = `user/${userId}/performance`;
      break;

    default:
      endPoint = `user/${userId}`;
  }
  return endPoint;
}
