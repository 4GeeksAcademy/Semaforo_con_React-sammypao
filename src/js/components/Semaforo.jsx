import React, { useState } from "react";



const Semaforo = () => {
  const [selected, setSelected] = useState("circulo-rojo");

  return (
    <main>
      <div className="barra-arriba"></div>
      <div className="caja-luces">
        <div 
          className={`circulo-rojo ${selected === "circulo-rojo" ? "luces-encendidas" : ""}`}
          onClick={() => setSelected("circulo-rojo")}
        ></div>
        <div 
          className={`circulo-amarillo ${selected === "circulo-amarillo" ? "luces-encendidas" : ""}`}
          onClick={() => setSelected("circulo-amarillo")}
        ></div>
        <div 
          className={`circulo-verde ${selected === "circulo-verde" ? "luces-encendidas" : ""}`}
          onClick={() => setSelected("circulo-verde")}
        ></div>
      </div>
    </main>
  );
};

export default Semaforo;
