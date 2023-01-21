import { useMutation } from "@tanstack/react-query";
import { createPost } from "../apis/posts";
import Post from "./Post";
import { useRef } from "react";

const CreatePost = ({ setCurrPage }) => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts", data.id], data); // adding the post data in the cache
      queryClient.invalidateQueries(["posts"], { exact: true }); // invalidateQueries refetch the new posts data instead of getting from cache
      setCurrPage(<Post id={data.id} />);
    },
  });

  const { mutate, isError, isLoading, error } = createPostMutation;

  function handleSubmit(e) {
    e.preventDefault();
    mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  }

  return (
    <div>
      {isError && JSON.stringify(error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>

        <button disabled={isLoading}>{isLoading ? "Loading" : "Create"}</button>
      </form>
    </div>
  );
};

export default CreatePost;
