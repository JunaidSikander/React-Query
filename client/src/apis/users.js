import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export async function getUser(id) {
  return axios.get(`${SERVER_URL}/users/${id}`).then((res) => res.data);
}
