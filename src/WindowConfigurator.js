import React, { useState } from "react";

const WindowConfigurator = () => {
  const [color, setColor] = useState("white");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Configurazione completata:\nColore infissi: ${color}\nAltezza: ${height} cm\nLarghezza: ${width} cm`
    );
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Colore degli infissi:</strong>
          </label>
          <div>
            <select value={color} onChange={handleColorChange}>
              <option value="white">Bianco</option>
              <option value="brown">Marrone</option>
              <option value="red">Rosso</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Altezza (cm):</strong>
          </label>
          <div>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Inserisci altezza"
              style={{ padding: "5px", width: "100%" }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Larghezza (cm):</strong>
          </label>
          <div>
            <input
              type="number"
              value={width}
              onChange={handleWidthChange}
              placeholder="Inserisci larghezza"
              style={{ padding: "5px", width: "100%" }}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Configura
        </button>
      </form>
    </div>
  );
};

export default WindowConfigurator;
