import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "../route/pages/posts/posts";
import Post from "../route/pages/post/post";

const AppRoutes = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path="details/:name" element={<Post />} />
    </Routes>
  </BrowserRouter>)
};

export default AppRoutes