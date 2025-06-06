import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import JobCards from "./components/User/find-job.js";
import Upload from "./components/User/upload-cv.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user/find-job" element={<JobCards />} />
          <Route path="user/upload-cv" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
