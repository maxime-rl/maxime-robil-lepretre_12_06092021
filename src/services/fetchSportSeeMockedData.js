import axios from "axios";
import UserInfosModel from "../models/UserInfosModel";
import UserActivityModel from "../models/UserActivityModel";
import UserAverageSessionsModel from "../models/UserAverageSessionsModel";
import UserPerformanceModel from "../models/UserPerformanceModel";

/**
 * Async function to fetch user infos on sportSee API
 * Endpoint => user/${userId}
 * @param {string} userId
 * @requires module:models/UserInfosModel
 * @returns {Array|undefined} data user infos or error
 */
export async function fetchUserInfos(userId) {
  try {
    const response = await axios.get(`/user/${userId}.json`);

    return new UserInfosModel(response.data.data);
  } catch (error) {
    console.error("Error from fetch: ", error);
  }
}

/**
 * Async function to fetch user activity on sportSee API
 * Endpoint => user/${userId}/activity
 * @param {string} userId
 * @requires module:models/UserActivityModel
 * @returns {Object|undefined} data user activity or error
 */
export async function fetchUserActivity(userId) {
  try {
    const response = await axios.get(`/user/${userId}/activity.json`);

    return new UserActivityModel(response.data.data);
  } catch (error) {
    console.error("Error from fetch: ", error);
  }
}

/**
 * Async function to fetch user average sessions on sportSee API
 * Endpoint => user/${userId}/average-sessions
 * @param {string} userId
 * @requires module:models/UserAverageSessionsModel
 * @returns {Object|undefined} data user average sessions  or error
 */
export async function fetchUserAverageSessions(userId) {
  try {
    const response = await axios.get(`/user/${userId}/average-sessions.json`);

    return new UserAverageSessionsModel(response.data.data);
  } catch (error) {
    console.error("Error from fetch: ", error);
  }
}

/**
 * Async function to fetch user performance on the sportSee API
 * Endpoint => user/${userId}/performance
 * @param {string} userId
 * @requires module:models/UserPerformanceModel
 * @returns {Object|undefined} data user performance or error
 */
export async function fetchUserPerformance(userId) {
  try {
    const response = await axios.get(`/user/${userId}/performance.json`);

    return new UserPerformanceModel(response.data.data);
  } catch (error) {
    console.error("Error from fetch: ", error);
  }
}
