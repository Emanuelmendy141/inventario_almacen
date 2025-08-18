import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import datosProductos from '../../datos/Productos'; 
import Boton from '../../componentes/Boton/Boton.jsx'; 
import estilos from './PaginaDetalleProducto.module.css'; 

const PaginaDetalleProducto = () => {
  const { id } = useParams();
  const navegar = useNavigate();
  const producto = datosProductos.find(p => p.id === id);

  if (!producto) {
    return (
      <div className={estilos['pagina-detalle-producto']}>
        <h1 className={estilos['pagina-detalle-producto__titulo']}>Producto No Encontrado</h1>
        <Boton onClick={() => navegar('/productos')}>Volver al Catálogo</Boton>
      </div>
    );
  }

  return (
    <div className={estilos['pagina-detalle-producto']}>
      <Boton onClick={() => navegar(-1)} variante="primario" className={estilos['pagina-detalle-producto__boton-volver']}>
        Volver
      </Boton>
      <div className={estilos['detalle-producto']}>
        <img src={producto.urlImagen} alt={producto.nombre} className={estilos['detalle-producto__imagen']} />
        <div className={estilos['detalle-producto__info']}>
          <h1 className={estilos['detalle-producto__titulo']}>{producto.nombre}</h1>
          <p className={estilos['detalle-producto__categoria']}>Categoría: {producto.categoria}</p>
          <p className={estilos['detalle-producto__fabricante']}>Fabricante: {producto.fabricante}</p>
          <p className={estilos['detalle-producto__descripcion']}>{producto.descripcion}</p>
          <p className={estilos['detalle-producto__precio']}>Precio:${producto.precio.toFixed(2)}</p>
          <p className={estilos['detalle-producto__stock']}>Stock Disponible: {producto.stock}</p>
          <Boton variante="primario">Editar Producto</Boton>
        </div>
      </div>
    </div>
  );
};

export default PaginaDetalleProducto;