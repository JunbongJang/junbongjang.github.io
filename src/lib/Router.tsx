import { Route, Routes, Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Blog } from "../pages/Blog";
import { Home } from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout></DefaultLayout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/blog/:id" element={<PostDetail></PostDetail>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
