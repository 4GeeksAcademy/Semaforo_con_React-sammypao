import React, { useState } from "react";

export default function Semaforo() {
  // ========== ESTADO: Guarda qué color está brillando ==========
  const [colorActivo, setColorActivo] = useState(undefined);

  // Estado para mostrar/ocultar la luz púrpura
  const [mostrarPurpura, setMostrarPurpura] = useState(false);

  // ========== FUNCIÓN PARA CAMBIAR EL COLOR ==========
  const cambiarColor = (nuevoColor) => {
    setColorActivo(nuevoColor);
  };

  return (
    <div className="contenedor-principal">
      {/* Poste del semáforo */}
      <div className="poste"></div>

      {/* Caja del semáforo con las luces */}
      <div className="semaforo">
        {/* LUZ ROJA */}
        <div
          className={`luz roja ${
            colorActivo === "rojo" ? "brillar" : ""
          } d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("rojo")}
        >
          🔴
        </div>

        {/* LUZ AMARILLA */}
        <div
          className={`luz amarilla ${
            colorActivo === "amarillo" ? "brillar" : ""
          } d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("amarillo")}
        >
          🟡
        </div>

        {/* LUZ VERDE */}
        <div
          className={`luz verde ${
            colorActivo === "verde" ? "brillar" : ""
          } d-flex justify-content-center align-items-center`}
          onClick={() => cambiarColor("verde")}
        >
          🟢
        </div>

        {/* LUZ PÚRPURA */}
        <div>
          {mostrarPurpura ? (
            <div
              className={`luz purpura ${
                colorActivo === "purpura" ? "brillar" : ""
              } d-flex justify-content-center align-items-center`}
              onClick={() => cambiarColor("purpura")}
            >
              🟣
            </div>
          ) : null}
        </div>
      </div>

      {/* Contenedor de los botones de las funciones extra */}
      <div className="botonera mt-3 d-flex gap-2">
        {/* Botón para cambiar de color */}
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (colorActivo === "rojo") {
              cambiarColor("amarillo");
            } else if (colorActivo === "amarillo") {
              cambiarColor("verde");
            } else if (colorActivo === "verde") {
              if (mostrarPurpura) {
                cambiarColor("purpura");
              } else {
                cambiarColor("rojo");
              }
            } else {
              cambiarColor("rojo");
            }
          }}
        >
          Cambiar Color
        </button>

        {/* Botón para mostrar/ocultar el color purpura */}
        <button
          className="btn btn-secondary"
          onClick={() => {
            setMostrarPurpura(!mostrarPurpura);
          }}
        >
          Mostrar/Ocultar 🟣 Púrpura
        </button>
      </div>
    </div>
  );
}
