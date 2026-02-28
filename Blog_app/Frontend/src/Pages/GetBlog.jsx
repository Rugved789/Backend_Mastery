import { useEffect, useState } from "react";
import axios from "axios";

const GetBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get-blog").then((res) => {
      setPosts(res.data.userBlog);
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-start gap-10 h-full w-full p-10">
      <h1 className="mb-10 font-bold text-4xl">My Posts</h1>

      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div key={post._id} className="h-full rounded-2xl bg-gray-100 p-2">
              <img src={post.img_url} alt="postImage" className="rounded-2xl w-70"/>
              <p>{post.caption}</p>
            </div>
          );
        })
      ) : (
        <h1> No Post Found</h1>
      )}
    </div>
  );
};

export default GetBlog;
