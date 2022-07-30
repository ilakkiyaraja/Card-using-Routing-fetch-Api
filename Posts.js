import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";

import Post from "./Post";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://gorest.co.in/public/v2/posts`, {
      headers: {
        Authorization:
          "Bearer 5926e500ffec8fc2a39506e1c0505b8fe747159f6b782c1d71c2ee4adc6316c0",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPost(json);
      });
  }, []);

  return (
    <div>
      <div>
        <button
          className="float-right p-2 rounded bg-blue-800 text-xl text-white mr-10"
          onClick={() => {
            navigate("/createpost");
          }}
        >
          Add Post
        </button>
      </div>
      <ul className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {post.map((item) => (
          <Post data={item} />
        ))}
      </ul>
    </div>
  );
}
export default Posts;
