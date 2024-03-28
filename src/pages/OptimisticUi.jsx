import React, { useState } from "react";

function OptimisticUi() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Function to create a new post
  const createPost = async (post_data) => {
    setIsLoading(true);
    setIsError(false);
    setPost(post_data); // Optimistic UI update
    
    // Send the request to the server
    const request = await fetch("https://api.example.com/posts", {
      method: "POST",
      body: JSON.stringify(post_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      setIsError(true);
      setPost(null); // Revert the changes if the server responds with an error
    }

    setIsLoading(false);
  };

  return (
   <>
    <div className="text-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>An error occured!</p>
      ) : post ? (
        <div>
          <p>Post created with ID: {post.id}</p>
          <p>Title: {post.title}</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost({ title: e.target.elements.title.value, content: e.target.elements.content.value });
          }}
        >
         <div> <input type="text" placeholder="Title" name="title" /></div>
          <div className="pt-2"><textarea placeholder="Content" name="content" /></div>
          <div className="pt-2"><button className="btn btn-info" type="submit">Create Post</button></div>
        </form>
      )}
    </div>
    <hr />
   </>
  );
}

export default OptimisticUi;