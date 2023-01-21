import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/posts";

const PostsList2 = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const { error, data, isLoading } = postsQuery;

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>Posts List 2</h1>
      <ol>
        {data.map((post) => {
          const { id, title } = post;
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};

export default PostsList2;
