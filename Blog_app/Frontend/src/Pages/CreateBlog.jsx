import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-blog", formData)
      .then((res) => {
        e.target.reset();
        navigate("/get-blog");
      })
      .catch((err) => {
        console.log(err);
        alert("Error Creating Post");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full w-full pt-10">
      <form
        className="flex flex-col justify-center gap-20 p-10 items-center bg-gray-400 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-2xl">Create Post</h1>

        <div className="flex justify-center items-center">
          <input
            type="file"
            name="image"
            accept="/image/*"
            className="border rounded-xl px-2 py-2"
          />
        </div>

        <div className="w-full">
          <input
            className="outline-none border rounded-xl px-5 py-2"
            type="text"
            name="caption"
            placeholder="Enter Caption"
            required
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="rounded-2xl bg-green-300 px-3 py-2">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
