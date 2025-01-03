import React from "react";
import WindowConfigurator from "./WindowConfigurator";
import "./App.css"; // Per gli stili

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <header>
        <h1>Window Configurator</h1>
      </header>
      <WindowConfigurator />
      {/* Aggiungere il footer */}
      <footer style={{ marginTop: "20px" }}>
        <img
          src="/legnolab.jpg"
          alt="Logo Falegnameria"
          style={{ width: "100%", maxWidth: "600px", marginTop: "20px" }}
        />
      </footer>
    </div>
  );
}

export default App;
