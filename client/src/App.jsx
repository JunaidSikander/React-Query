import { useState } from "react";
import { PostsList1, PostsList2 } from "./components";

const App = () => {
  const [currPage, setCurrPage] = useState(<PostsList1 />);

  return (
    <div>
      <button onClick={() => setCurrPage(<PostsList1 />)}>Post List 1</button>
      <button onClick={() => setCurrPage(<PostsList2 />)}>Post List 2</button>
      <br />
      {currPage}
    </div>
  );
};

export default App;
