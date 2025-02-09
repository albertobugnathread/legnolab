import React, { useState } from "react";

const WindowConfigurator = () => {
  const [essence, setEssence] = useState("ABETE");
  const [depth, setDepth] = useState("");
  const [lenght, setLenght] = useState("");
  const [brush, setBrush] = useState("");
  const depthFront = 20;
  const [heightFront, setHeightFront] = useState("");
  
  const [dx, setDx] = useState("");
  const [sx, setSx] = useState("");  
  const [panelThickness] = useState(19); // Valore fisso
  const [paintingType, setPaintingType] = useState("Aggrappante");
  const [total, setTotal] = useState(null);

  //PREZZI DEFAULT 
  var priceWood = new Map();
  priceWood.set("ABETE", 35.78 * 1.5);
  priceWood.set("LARICE", 44.17 * 1.5);
  priceWood.set("ROVERE", 40.77 * 1.5);
  priceWood.set("FRASSINO", 31.15 * 1.5);
  priceWood.set("HDF", 19.60 * 1.5);

  var fixed = 85;
  
  var m2 = (depth * lenght / 1000000) * 1.05;
  if(m2 < 0.25)
    m2 = 0.25;

  const calcWoodPrice = priceWood.get(essence) * m2
  var tot = 0;

  var brushPrice = 0
  if(brush)
    brushPrice = m2 * 0.20;

  tot = tot + brushPrice;

  var paintingPrice = 0;
  if(paintingType === "RAL")
    paintingPrice = ((depth * lenght + lenght * heightFront) / 1000000) * 85;
  else if(paintingType === "Mordenzato")  
    paintingPrice = ((depth * lenght + lenght * heightFront) / 1000000) * 75;

  tot+= paintingPrice;

  var m3 = ((heightFront + dx + sx) * depthFront * lenght) / 1000000000 * 1.05;
  var m3Price = m3 * 1516.20;

  tot+= m3Price;
  tot+=fixed;
  tot+= calcWoodPrice;
  tot = tot * 1.02;

  const handleSubmit = (event) => {
    event.preventDefault();
    var totalPrice = tot;
    setTotal(totalPrice);

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
                <option value="HDF">HDF</option>
              </select>
            </div>

            {/* Profondità */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Profondità bancalino (mm):</strong>
              </label>
              <input
                type="number"
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                required
              />
            </div>

            {/* Lunghezza */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Lunghezza bancalino (mm):</strong>
              </label>
              <input
                type="number"
                value={lenght}
                onChange={(e) => setLenght(Number(e.target.value))}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Spessore bancalino (mm):</strong>
              </label>
              <input type="number" value={panelThickness} readOnly />
            </div>

            {/* Spazzolatura */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Spazzolatura:</strong>
              </label>
              <select
                value={brush}
                onChange={(e) => setBrush(e.target.value === "true")}
              >
                <option value="false">NO</option>
                <option value="true">SI</option>
              </select>
            </div>

            {/* Tipologia verniciatura */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Tipologia verniciatura:</strong>
              </label>
              <select
                value={paintingType}
                onChange={(e) => setPaintingType(e.target.value)}
              >
                <option value="Grezzo">Grezzo</option>
                <option value="Mordenzato">Mordenzato</option>
                <option value="RAL">RAL</option>
              </select>
            </div>

            {/* Altezza Toro frontale */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Altezza toro frontale (mm):</strong>
              </label>
              <input
                type="number"
                value={heightFront}
                onChange={(e) => setHeightFront(Number(e.target.value))}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Spessore toro frontale (mm):</strong>
              </label>
              <input type="number" value="20" readOnly />
            </div>

            {/* Sporgenza destra Toro frontale */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Sporgenza destra Toro frontale (mm):</strong>
              </label>
              <input
                type="number"
                value={dx}
                onChange={(e) => setDx(Number(e.target.value))}
                required
              />
            </div>

            {/* Sporgenza sinistra Toro frontale */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Sporgenza sinistra Toro frontale (mm):</strong>
              </label>
              <input
                type="number"
                value={sx}
                onChange={(e) => setSx(Number(e.target.value))}
                required
              />
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
              CALCOLA PREZZO
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