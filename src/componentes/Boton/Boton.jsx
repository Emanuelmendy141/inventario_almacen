import React from 'react';
import estilos from './Boton.module.css';

const Boton = ({ children, onClick, type = 'button', variante = 'primario', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${estilos.boton} ${estilos[`boton--${variante}`]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Boton;