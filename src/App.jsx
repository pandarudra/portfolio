import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
