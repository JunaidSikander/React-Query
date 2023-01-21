import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/posts";

const PostsList1 = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    placeholderData: [{ id: 1, title: "Initial Data" }], //Initial Data
  });

  const { status, error, data } = postsQuery;

  if (status === "loading") return <h1>Loading...</h1>;

  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {data.map((post) => {
          const { id, title } = post;
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};

export default PostsList1;
