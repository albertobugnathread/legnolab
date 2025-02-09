import React, { useState } from "react";

const WindowConfigurator = () => {
  const [width, setWidth] = useState("");
  const [widthTermal, setWidthTermal] = useState("");
  const [height, setHeight] = useState("");
  const [heightTermal, setHeightTermal] = useState("");
  const [front, setFront] = useState("");
  const [depth, setDepth] = useState("");
  const [grid, setGrid] = useState(false);
  const [german, setGerman] = useState(false);
  const [three, setThree] = useState(false);
  const [widthThree, setWidthThree] = useState(false);
  const [anchor, setAnchor] = useState(false);
  const [shape, setShape] = useState(false);
  
  const [panelThickness] = useState(19); // Valore fisso
  const [frontThickness] = useState(15); // Valore fisso
  const [total, setTotal] = useState(null);

  
  var tot = 45;

  if(anchor)
    tot+= 10;
  if(german)
    tot+= 5;
  if(grid)
    tot+= 6;
  if(three)
    tot+= 30;

  var m2_1 = (2 * (height + front)) * front * 1.05 / 1000000;
  var m2_2 = (2 * front + width) *  front * 1.05 / 1000000;
  var m2 = m2_1 + m2_2;

  var m2Price = m2 * 5.70 * 1.5;

  tot+= m2Price;

  var m2_sh_1 = (height + front) *  depth * 2 * 1.05 / 1000000;
  var m2_sh_2 = (2 * front + width) * depth * 1.05 / 1000000;
  var m2_sh = m2_sh_1 + m2_sh_2;

  var m2_shPrice = m2_sh * 13.26 * 1.5;

  tot+= m2_shPrice;

  var thermalM3 = (( (2 * front + width) * heightTermal * widthTermal)) * 1.05 / 1000000000;

  var priceThermal = thermalM3 * 1516.20;

  tot+= priceThermal;

  var gridPrice = 0;
  if(grid){
    var gridM2 = (height * 2 + width) * 1.05 / 1000;
    gridPrice = gridM2 * 3.55 * 1.5;
  }

  if(three){
    var threeM2 = (((height + front + 42) * 2 * widthThree / 1000) + (width + 2 * front + 2 * 42) * widthThree / 1000) * 1.05;
    var threePrice = threeM2 / 1000 * 35.50 * 1.5;
    tot+= threePrice
  }

  tot+= gridPrice;

  if(shape === "TRAPEZIOIDALE"){
    tot*=1.7;
  }
  else if(shape === "ARCATA"){
    tot*=1.7;
  }
  else if(shape === "OBLO"){
    tot*=2;
  }
  
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
              {/* Larghezza Luce architettonica */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Larghezza Luce architettonica (mm):</strong>
              </label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                required
              />
            </div>

            {/* Altezza Luce architettonica */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Altezza Luce architettonica (mm):</strong>
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                required
              />
            </div>

            {/* Battuta frontale*/}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Larghezza Battuta frontale:</strong>
              </label>
              <input
                type="number"
                value={front}
                onChange={(e) => setFront(Number(e.target.value))}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Spessore Battuta frontale in OSB (mm):</strong>
              </label>
              <input type="number" value={frontThickness} readOnly />
            </div>

            {/* Profondità spalla */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Profondità spalla:</strong>
              </label>
              <input
                type="number"
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Spessore Spalla (mm):</strong>
              </label>
              <input type="number" value={panelThickness} readOnly />
            </div>

            {/* Dimensioni taglio termico */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Dimensioni taglio termico (larghezza):</strong>
              </label>
              <input
                type="number"
                value={widthTermal}
                onChange={(e) => setWidthTermal(Number(e.target.value))}
                required
              />
            </div>

            {/* Dimensioni taglio termico */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Dimensioni taglio termico (altezza):</strong>
              </label>
              <input
                type="number"
                value={heightTermal}
                onChange={(e) => setHeightTermal(Number(e.target.value))}
                required
              />
            </div>

            {/* Rete porta intonaco */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Rete porta intonaco esterna:</strong>
              </label>
              <select
                value={grid}
                onChange={(e) => setGrid(e.target.value === "true")}
              >
                <option value="false">NO</option>
                <option value="true">SI</option>
              </select>
            </div>

            {/* Falso alla tedesca */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Falso alla tedesca:</strong>
              </label>
              <select
                value={german}
                onChange={(e) => setGerman(e.target.value === "true")}
              >
                <option value="false">NO</option>
                <option value="true">SI</option>
              </select>
            </div>

            {/* Tre strati */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Tre strati da 42mm (per cardini scuri):</strong>
              </label>
              <select
                value={three}
                onChange={(e) => setThree(e.target.value === "true")}
              >
                <option value="false">NO</option>
                <option value="true">SI</option>
              </select>
            </div>

            {/*  */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Larghezza tre strati 42mm:</strong>
              </label>
              <input
                type="number"
                value={widthThree}
                onChange={(e) => setWidthThree(Number(e.target.value))}
                required
              />
            </div>

            {/* Tre strati */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Zanche:</strong>
              </label>
              <select
                value={anchor}
                onChange={(e) => setAnchor(e.target.value === "true")}
              >
                <option value="false">NO</option>
                <option value="true">SI</option>
              </select>
            </div>

            {/* Forma */}
            <div style={{ marginBottom: "15px" }}>
              <label>
                <strong>Forma falso:</strong>
              </label>
              <select value={shape} onChange={(e) => setShape(e.target.value)}>
                <option value="RETTANGOLARE">RETTANGOLARE</option>
                <option value="TRAPEZIOIDALE">TRAPEZIOIDALE</option>
                <option value="ARCATA">ARCATA</option>
                <option value="OBLO">OBLO'</option>
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