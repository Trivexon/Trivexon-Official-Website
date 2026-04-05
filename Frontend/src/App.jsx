import React, { useState, useCallback } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SimpleFooter from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
// ============ Services ============
import WebDesign from "./services/WebDesign";
import SeoServices from "./services/SeoServices";
import Erp_Crm from "./services/Erp_Crm";
import E_commerce from "./services/E_commerce";
import Wordpress from "./services/wordpress";
import Voice_automation from "./services/Voice_automation";
import Ui_Ux from "./services/ui_ux";
import Ai_automation from "./services/Ai_automation.jsx";
import Ai_agent from "./services/Ai_agent.jsx";
import N8n from "./services/nn_workflow.jsx";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <HelmetProvider>
      {/* Splash screen — shows once on first load */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main app — hidden behind splash until done */}
      <div style={{ visibility: splashDone ? 'visible' : 'hidden' }}>
        <Router>
          <ScrollToTop />
          <PageLoader />
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />

              {/* ===================== Services ===================== */}
              <Route path="/services/web-design" element={<WebDesign />} />
              <Route path="/services/seo-services" element={<SeoServices />} />
              <Route path="/services/seoservices" element={<SeoServices />} />
              <Route path="/services/erp-crm" element={<Erp_Crm />} />
              <Route path="/services/e-commerce" element={<E_commerce />} />
              <Route path="/services/wordpress" element={<Wordpress />} />
              <Route path="/services/voice-automation" element={<Voice_automation />} />
              <Route path="/services/ui-ux" element={<Ui_Ux />} />
              <Route path="/services/ai-automation" element={<Ai_automation />} />
              <Route path="/services/ai-agent" element={<Ai_agent />} />
              <Route path="/services/nn-workflow" element={<N8n />} />
            </Routes>
          </div>
          <SimpleFooter />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
