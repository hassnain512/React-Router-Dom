import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Github  , {GithubApi}from "./components/Github/Github.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import UserId from "./components/UserId/UserId.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" loader={GithubApi} element={<Github />} />
      <Route path="userid/:id" element={<UserId />} />
      <Route
        path="*"
        element={
          <h1 className="bg-gray-700 text-3xl text-white">Page not found</h1>
        }
      />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
