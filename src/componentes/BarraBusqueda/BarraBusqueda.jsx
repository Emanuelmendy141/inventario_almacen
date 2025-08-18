import React from 'react';
import estilos from './BarraBusqueda.module.css';
import CampoEntrada from '../CampoEntrada/CampoEntrada'; 

const BarraBusqueda = ({ terminoBusqueda, alCambiarBusqueda, placeholder = 'Buscar productos...' }) => {
  return (
    <div className={estilos['barra-busqueda']}>
      <CampoEntrada
        id="input-busqueda"
        type="text"
        placeholder={placeholder}
        value={terminoBusqueda}
        onChange={(e) => alCambiarBusqueda(e.target.value)}
        className={estilos['barra-busqueda__input']}
      />
    </div>
  );
};

export default BarraBusqueda;