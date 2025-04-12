import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "./state/article/articleSlice";
import toast from "react-hot-toast";

export default function Article() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  console.log(articles);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title, body }));
    toast.success("Article added successfully");
    setTitle("");
    setBody("");
  };

  const handleDelete = (id) => {
    toast.error("Article deleted successfully");
    dispatch(removeArticle({ id }));
  };

  return (
    <div className="p-4">
      <h1>Articles</h1>
      <div className="flex  justify-between gap-20 ">
        <div className="w-1/2 border border-gray-300 p-4">
            <h2 className="text-2xl font-bold border-b mb-4">Add Article</h2>
          <form onSubmit={handleSubmit} className="">
            <input
              className="w-full p-2 border my-10 border-gray-300 rounded"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="w-full p-2 my-10 border border-gray-300 rounded"
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Article
            </button>
          </form>
        </div>
        <div className="mt-6 space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-4 border border-gray-300 rounded shadow"
            >
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p className="text-gray-700">{article.body}</p>
              <button
                onClick={() => handleDelete(article.id)}
                className="px-4 py-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
