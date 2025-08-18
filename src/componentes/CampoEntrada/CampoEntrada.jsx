import React from 'react';
import estilos from './CampoEntrada.module.css';

const CampoEntrada = ({ etiqueta, id, type = 'text', value, onChange, placeholder, ...props }) => {
  return (
    <div className={estilos['campo-entrada']}>
      {etiqueta && <label htmlFor={id} className={estilos['campo-entrada__etiqueta']}>{etiqueta}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={estilos['campo-entrada__input']}
        {...props}
      />
    </div>
  );
};

export default CampoEntrada;