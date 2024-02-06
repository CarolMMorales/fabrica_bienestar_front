import axios from "axios";
const axiosClient = axios.create({
  //conexion base de datos api
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  withCredentials: true,
});

export default axiosClient;
