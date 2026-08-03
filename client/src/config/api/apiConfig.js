import axios from "axios";
import envVariables from "../../constants/envVariables";

const { backendUrl, applicationMode } = envVariables;

const API = axios.create({
  baseURL: applicationMode === "development" ? backendUrl : "/nextstore/api/v1",
});

export default API;
