import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WindowConfigurator from "./WindowConfigurator";
import WindowConfiguratorBanc from "./WindowConfiguratorBanc";
import WindowConfiguratorFalsi from "./WindowConfiguratorFalsi";

import "./App.css";

// Nuovo componente per la seconda pagina
const SecondPage = () => (
  <div>
    <h2>Seconda Pagina</h2>
    {/* Contenuto della seconda pagina */}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", padding: "20px" }}>
        {/* Navigation Tabs */}
        <nav style={{ marginBottom: "20px" }}>
          <NavLink 
            to="/"
            style={({ isActive }) => ({
              marginRight: "20px",
              padding: "10px",
              textDecoration: "none",
              backgroundColor: isActive ? "#ddd" : "transparent"
            })}
          >
            CASSONETTI
          </NavLink>
          <NavLink 
            to="/cassonetti"
            style={({ isActive }) => ({
              padding: "10px",
              textDecoration: "none",
              backgroundColor: isActive ? "#ddd" : "transparent"
            })}
          >
            BANCALINI
          </NavLink>

          <NavLink 
            to="/falsi"
            style={({ isActive }) => ({
              padding: "10px",
              textDecoration: "none",
              backgroundColor: isActive ? "#ddd" : "transparent"
            })}
          >
            FALSI
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<WindowConfigurator />} />
          <Route path="/cassonetti" element={<WindowConfiguratorBanc />} />
          <Route path="/falsi" element={<WindowConfiguratorFalsi />} />
        </Routes>

        {/* Footer */}
        <footer style={{ marginTop: "20px" }}>
          <img
            src="/legnolab.jpg"
            alt="Logo Falegnameria"
            style={{ width: "100%", maxWidth: "600px", marginTop: "20px" }}
          />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;