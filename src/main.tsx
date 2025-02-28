import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/fragments/Navbar";
import Header from './components/fragments/Header';  
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
      </Routes>

      <Routes>
        <Route path="/header" element={<Header/>}/>
        </Routes>

      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
