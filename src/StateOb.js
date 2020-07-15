import React, { useState } from "react";
export default () => {
  const [text, setText] = useState(""),
    a = () => {
      switch (text) {
        case "sfax":
          return (
            <div
              style={{
                textIndent: "25px",
                marginLeft: "35px",
                width: "450px",
                fontWeight: "bold",
              }}
            >
              <p>
                Sfax compte 272 801 habitants en 20142 pour une agglomération,
                le Grand Sfax, d'environ 600 000 habitants et se présente comme
                une agglomération très étendue , plate et comprise dans un tissu
                urbain structuré par des axes de communication en toile
                d'araignée. Elle est bordée à l'est par la mer Méditerranée et
                l'amorce du golfe de Gabès.
              </p>
            </div>
          );
        case "kerkennah":
          return (
            <div
              style={{
                textIndent: "25px",
                marginLeft: "35px",
                width: 450,
                fontWeight: "bold",
              }}
            >
              <p>
                Les Kerkennah sont un archipel tunisien de la mer Méditerranée
                situé à 17,9 kilomètres au large de Sidi Mansour, dans la
                périphérie nord-est de Sfax. Administrativement, il constitue
                une délégation rattachée au gouvernorat de Sfax, composée de dix
                imadas, mais aussi une municipalité.
              </p>
            </div>
          );
      }
    };
  return (
    <div style={{ marginTop: "9%", marginLeft: "-414px" }}>
      <h1 style={{ textAlign: "center", marginRight: "500px" }}>
        welcome to own contry
      </h1>
      <input
        style={{
          color: "gray",
          borderRadius: "1rem",
          padding: "10px",
          marginLeft: "-15px",
          width: "400px",
        }}
        placeholder="search(kerkennah / sfax"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        {text.length !== 0 && <img src={`${text}.jpg`} />}
        {a()}
      </div>
    </div>
  );
};
