import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Setup from "./Setup.jsx";
import Practice from "./Practice.jsx";
import DancingWithDragons from "./DancingWithDragons.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practice" element={<Practice />} />
          <Route path="setup" element={<Setup />} />
          <Route path="dancing-with-dragons" element={<DancingWithDragons />} />
          <Route path="*" element={<NotFound />} /> {/* 404 catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
