import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import Wtr from "./pages/Wtr";
import Read from "./pages/Read";
import Search from "./pages/Search";
import Reply from "./pages/Reply";
import Community from "./pages/Community";
import Saved from "./pages/Saved";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>

      <Routes>
        <Route path="/Wtr" element={<Wtr />} />
      </Routes>

      <Routes>
        <Route path="/Read" element={<Read />} />
      </Routes>

      <Routes>
        <Route path="/Search" element={<Search />} />
      </Routes>

      <Routes>
        <Route path="/Reply" element={<Reply />} />
      </Routes>

      <Routes>
        <Route path="/Community" element={<Community />} />
      </Routes>

      <Routes>
        <Route path="/Saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
