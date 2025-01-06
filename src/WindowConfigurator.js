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

    //LEGNAME
    const widthListellareFront = (width + 10) / 1000;
    const heightListellareFront = (height + 10) / 1000;

    const widthListellareLat = depthTop / 1000;
    const heightListellareLat = height / 1000;

    const widthListellareSup = width / 1000;
    const heightListellareSup = depthTop / 1000;

    const widthListellareInf = width / 1000;
    const heightListellareInf = depthBottom / 1000;

    //ISOLAZIONE
    const widthInsulationFront = (width - 2 * panelThickness) / 1000;
    const heightInsulationFront = (height - 2 * panelThickness) / 1000;

    const widthInsulationLat = depthBottom;
    const heightInsulationLat = height;

    const widthInsulationBottom = (width - 2 * panelThickness) / 1000;
    const heightInsulationBottom = (depthBottom - 2 * panelThickness) / 1000;

    const widthInsulationTop = (width - 2 * panelThickness) / 1000;
    const heightInsulationTop = (depthTop - 2 * panelThickness) / 1000;

    //SPAZZOLA INTERNA
    const widthBrushInternal = width / 1000;
    const heightBrushInternal = internalBrushDepth / 1000;

   //PREZZI DEFAULT 
   const LARICE_M2 = 35.78;

   const INSULATION_10 = 7.92;
   const INSULATION_20 = 12.60;
   const INSULATION_30 = 19.60;

   const BRUSH_INTERNAL = 3.07;

   const woodPrice = LARICE_M2 * 1.45;
   const insulationPrice = INSULATION_10 * 1.45;
   const brushPrice = 3.07 * 1.45;

   //LEGNAME
   var totM2= widthListellareFront * heightListellareFront + 2 * widthListellareLat * heightListellareLat + widthListellareSup * heightListellareSup + widthListellareInf * heightListellareInf;
   //sfrido
   totM2 = totM2 * 1.05;
   const calcWoodPrice = woodPrice * totM2

   //ISOLANTE
   var calcInsulationPrice = 0;
   if(insulationThickness > 0){
      var insulationTotM2 = widthInsulationFront * heightInsulationFront + 2 * widthInsulationLat * heightInsulationLat + widthInsulationBottom * heightInsulationBottom + widthInsulationTop * heightInsulationTop;
      insulationTotM2 = insulationTotM2 * 1.05;
      var calcInsulationPrice = insulationPrice * insulationTotM2;
   }

   //SPAZZOLA INTERNA
   var calcBrushPrice = 0;
   var brushTotM = widthBrushInternal * 1.05;
   if(internalBrush)
    var calcBrushPrice = brushTotM * brushPrice;

    event.preventDefault();
    setTotal(calcWoodPrice + calcInsulationPrice + calcBrushPrice);
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
            onChange={(e) => setDepthTop(Math.max(75, Number(e.target.value)))}
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
  );
};

export default WindowConfigurator;
