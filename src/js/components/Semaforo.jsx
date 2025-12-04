import React, { useState } from "react";

export default function Semaforo() {
  // ========== ESTADO: Guarda qué color está brillando ==========
  const [colorActivo, setColorActivo] = useState(undefined);
  
  // ========== FUNCIÓN PARA CAMBIAR EL COLOR ==========
  const cambiarColor = (nuevoColor) => {
    setColorActivo(nuevoColor);
  };
  
  return (
    <div className="contenedor-principal">
      {/* Poste del semáforo */}
      <div className="poste"></div>
      
      {/* Caja del semáforo con las 3 luces */}
      <div className="semaforo">
        {/* LUZ ROJA */}
        <div
          className={`luz roja ${colorActivo === "rojo" ? "brillar" : ""} d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("rojo")}
        >🔴</div>
        
        {/* LUZ AMARILLA */}
        <div
          className={`luz amarilla ${
            colorActivo === "amarillo" ? "brillar" : ""} d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("amarillo")}
        >🟡</div>
        
        {/* LUZ VERDE */}
        <div
          className={`luz verde ${colorActivo === "verde" ? "brillar" : ""} d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("verde")}
        >🟢</div>
      </div>
    </div>
  );
}
