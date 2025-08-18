import React from 'react';
import estilos from './TarjetaProducto.module.css';
import { Link } from 'react-router-dom';

const TarjetaProducto = ({ producto }) => {
  return (
    <Link to={`/productos/${producto.id}`} className={estilos['tarjeta-producto__enlace']}>
      <div className={estilos['tarjeta-producto']}>
        <img src={producto.urlImagen} alt={producto.nombre} className={estilos['tarjeta-producto__imagen']} />
        <div className={estilos['tarjeta-producto__contenido']}>
          <h3 className={estilos['tarjeta-producto__titulo']}>{producto.nombre}</h3>
          <p className={estilos['tarjeta-producto__categoria']}>{producto.categoria}</p>
          <p className={estilos['tarjeta-producto__precio']}>${producto.precio.toFixed(2)}</p>
          <p className={estilos['tarjeta-producto__stock']}>Stock: {producto.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default TarjetaProducto;