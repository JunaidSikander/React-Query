import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export function getPosts() {
  return axios
    .get(`${SERVER_URL}/posts`, { params: { _sort: "title" } })
    .then((res) => res.data);
}
