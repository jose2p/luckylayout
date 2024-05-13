import React from 'react';
//import './Ruleta.css'; // Archivo CSS para el estilo de la ruleta

const Ruleta = () => {
  return (
    <div className="ruleta">
      <div className="ruleta-inner">
        {/* Casillas de números */}
        <div className="numero cero">0</div>
        <div className="numero">28</div>
        <div className="numero rojo">9</div>
        {/* Añade el resto de los números según la disposición de la ruleta americana */}
        {/* Casillas de colores */}
        <div className="negro">2</div>
        <div className="rojo">14</div>
        {/* Añade el resto de las casillas de colores */}
        {/* Otros elementos de la ruleta como 1st 12, 2nd 12, 3rd 12, etc. */}
        <div className="primero">1st 12</div>
        <div className="segundo">2nd 12</div>
        <div className="tercero">3rd 12</div>
        {/* Añade otros elementos según la disposición de la ruleta americana */}
      </div>
    </div>
  );
}

export default Ruleta;
