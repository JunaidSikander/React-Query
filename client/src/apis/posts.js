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

export async function getPostsPaginated(page) {
  return axios
    .get(`${SERVER_URL}/posts`, {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
}
