import { useQuery } from "@tanstack/react-query";
import { getUser } from "../apis/users";
import { getPost } from "../apis/posts";


const Post = ({ id }) => {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  const {
    data: post,
    status: postStatus,
    error: postError,
    data: postData,
  } = postQuery; // destructuring and creating default variable alias

  const userQuery = useQuery({
    queryKey: ["users", post?.data?.userId],
    enabled: post?.userId != null, // run api when userId is not null,
    queryFn: () => getUser(post?.userId),
  });

  const {
    isLoading: userIsLoading,
    isError: userHasError,
    data: userData,
  } = userQuery; // destructuring and creating default variable alias

  if (postStatus === "loading") return <h1>Loading...</h1>;

  if (postStatus === "error") return <h1> {JSON.stringify(postError)} </h1>;

  return (
    <>
      <h1>
        {postData.title} <br />
        <small>
          {userIsLoading
            ? "Loading User..."
            : userHasError
            ? "Error Loading User"
            : userData.name}
        </small>
      </h1>
      <p>{postData.body}</p>
    </>
  );
};

export default Post;
