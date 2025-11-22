import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Values from "./pages/Values";
import Quality from "./pages/Quality";
import Process from "./pages/Process";
import Partners from "./pages/Partners";
import WebDevelopment from "./pages/WebDevelopment";
import UIDesign from "./pages/UIDesign";
import AppDevelopment from "./pages/AppDevelopment";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/process" element={<Process />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UIDesign />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
