import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = () =>
  axiosInstance.get("rooms/").then((response) => response.data);

// export async function getRooms() {
//   // const response = await axios.get(`${BASE_URL}/rooms/`);
//   const response = await axiosInstance.get(`rooms/`);

//   return response.data;
// }

export const getRoom = () =>
  axiosInstance.get(`rooms/11`).then((response) => response.data);
