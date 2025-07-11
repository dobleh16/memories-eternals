import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import AddMemory from "./pages/AddMemory";
import Eternals from "./pages/Eternals";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/add-memory" element={<AddMemory />} />
        <Route path="/eternals" element={<Eternals />} />
      </Routes>
    </Router>
  );
}
