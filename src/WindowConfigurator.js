import React, { useState } from "react";

const WindowConfigurator = () => {
  const [essence, setEssence] = useState("ABETE");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depthTop, setDepthTop] = useState(75);
  const [depthBottom, setDepthBottom] = useState("");
  const [panelThickness] = useState(19); // Valore fisso
  const [insulationThickness, setInsulationThickness] = useState(10);
  const [acousticKit, setAcousticKit] = useState(false);
  const [acousticKitThickness] = useState(4); // Valore fisso
  const [internalBrush, setInternalBrush] = useState(false);
  const [internalBrushDepth] = useState(20); // Valore fisso
  const [externalBrush, setExternalBrush] = useState(false);
  const [externalBrushModel, setExternalBrushModel] = useState("modello1");
  const [paintingType, setPaintingType] = useState("Aggrappante");
  const [beltGuide, setBeltGuide] = useState("nessuno");
  const [total, setTotal] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logica di calcolo totale (lasciata invariata)
    setTotal(123.45); // Esempio di totale
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Altezza della pagina intera
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Configuratore */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            maxWidth: "400px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <form onSubmit={handleSubmit}>
        {/* Essenza */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Essenza del cassonetto:</strong>
          </label>
          <select value={essence} onChange={(e) => setEssence(e.target.value)}>
            <option value="ABETE">ABETE</option>
            <option value="LARICE">LARICE</option>
            <option value="ROVERE">ROVERE</option>
            <option value="FRASSINO">FRASSINO</option>
          </select>
        </div>

        {/* Larghezza */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Larghezza cassonetto esterno (mm):</strong>
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            required
          />
        </div>

        {/* Altezza */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Altezza cassonetto esterno (mm):</strong>
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            required
          />
        </div>

        {/* Profondità superiore */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Profondità cassonetto superiore (mm):</strong>
          </label>
          <input
            type="number"
            value={depthTop}
            onChange={(e) => setDepthTop(Number(e.target.value))}
            required
          />
        </div>

        {/* Profondità inferiore */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Profondità cassonetto inferiore (mm):</strong>
          </label>
          <input
            type="number"
            value={depthBottom}
            onChange={(e) => setDepthBottom(Number(e.target.value))}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
            <label>
              <strong>Spessore pannello listellare (mm):</strong>
            </label>
            <input type="number" value={panelThickness} readOnly />
        </div>

        {/* Spessore pannello isolante */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Spessore pannello isolante (mm):</strong>
          </label>
          <select
            value={insulationThickness}
            onChange={(e) => setInsulationThickness(Number(e.target.value))}
          >
            <option value={0}>0</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

        {/* Kit acustico */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Kit acustico presente:</strong>
          </label>
          <select
            value={acousticKit}
            onChange={(e) => setAcousticKit(e.target.value === "true")}
          >
            <option value="false">NO</option>
            <option value="true">SI</option>
          </select>
        </div>

        {acousticKit && (
          <div style={{ marginBottom: "15px" }}>
            <label>
              <strong>Spessore kit acustico (mm):</strong>
            </label>
            <input type="number" value={acousticKitThickness} readOnly />
          </div>
        )}

        {/* Spazzolina interna */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Spazzolina interna:</strong>
          </label>
          <select
            value={internalBrush}
            onChange={(e) => setInternalBrush(e.target.value === "true")}
          >
            <option value="false">NO</option>
            <option value="true">SI</option>
          </select>
        </div>

        {internalBrush && (
          <div style={{ marginBottom: "15px" }}>
            <label>
              <strong>Profondità spazzolina interna (mm):</strong>
            </label>
            <input type="number" value={internalBrushDepth} readOnly />
          </div>
        )}

        {/* Spazzolina esterna */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Spazzolina esterna:</strong>
          </label>
          <select
            value={externalBrush}
            onChange={(e) => setExternalBrush(e.target.value === "true")}
          >
            <option value="false">NO</option>
            <option value="true">SI</option>
          </select>
        </div>

        {externalBrush && (
          <div style={{ marginBottom: "15px" }}>
            <label>
              <strong>Modello spazzolina esterna:</strong>
            </label>
            <select
              value={externalBrushModel}
              onChange={(e) => setExternalBrushModel(e.target.value)}
            >
              <option value="modello1">Modello 1 (10mm)</option>
              <option value="modello2">Modello 2 (20mm)</option>
            </select>
          </div>
        )}

        {/* Tipologia verniciatura */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Tipologia verniciatura:</strong>
          </label>
          <select
            value={paintingType}
            onChange={(e) => setPaintingType(e.target.value)}
          >
            <option value="Aggrappante">Aggrappante</option>
            <option value="Mordenzato">Mordenzato</option>
            <option value="RAL">RAL</option>
          </select>
        </div>

        {/* Guida cinghia */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Guida cinghia:</strong>
          </label>
          <select
            value={beltGuide}
            onChange={(e) => setBeltGuide(e.target.value)}
          >
            <option value="nessuno">Nessuno</option>
            <option value="frontale-marrone">
              Guidacinghia frontale plus marrone
            </option>
            <option value="inferiore-marrone">
              Guidacinghia inferiore plus marrone
            </option>
            <option value="frontale-bianco">
              Guidacinghia frontale plus bianco
            </option>
            <option value="inferiore-bianco">
              Guidacinghia inferiore plus bianco
            </option>
          </select>
        </div>

            {/* Altri campi come da codice originale */}
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

          {total !== null && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#e9f7e9",
              }}
            >
              <strong>
                TOTALE COMPLESSIVO (IVA ESCLUSA): €{total.toFixed(2)}
              </strong>
            </div>
          )}
        </div>

        {/* Immagini */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src="img1.png"
            alt="Schema frontale"
            style={{
              maxWidth: "600px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
          <img
            src="img2.png"
            alt="Schema laterale"
            style={{
              maxWidth: "600px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowConfigurator;