import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export async function getPosts() {
  return axios
    .get(`${SERVER_URL}/posts`, { params: { _sort: "title" } })
    .then((res) => res.data);
}

export async function getPost(id) {
  return axios.get(`${SERVER_URL}/posts/${id}`).then((res) => res.data);
}

export async function createPost({ title, body }) {
  return axios
    .post(`${SERVER_URL}/posts`, {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then((res) => res.data);
}
