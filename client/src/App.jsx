import { useState } from "react";
import {
  CreatePost,
  Post,
  PostListPaginated,
  PostsList1,
  PostsList2,
} from "./components";

const App = () => {
  const [currPage, setCurrPage] = useState(<PostsList1 />);

  return (
    <div>
      <button onClick={() => setCurrPage(<PostsList1 />)}>Post List 1</button>
      <button onClick={() => setCurrPage(<PostsList2 />)}>Post List 2</button>
      <button onClick={() => setCurrPage(<Post id={1} />)}>First Post</button>
      <button
        onClick={() => setCurrPage(<CreatePost setCurrPage={setCurrPage} />)}
      >
        New Post
      </button>
      <button onClick={() => setCurrPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <br />
      {currPage}
    </div>
  );
};

export default App;
