import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Encabezado.module.css';

const Encabezado = () => {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.encabezado__contenedor}>
        <Link to="/" className={estilos.encabezado__logo}>
          Almacen
        </Link>
        <nav className={estilos.encabezado__nav}>
          <ul className={estilos['encabezado__nav-lista']}>
            <li className={estilos['encabezado__nav-item']}>
              <Link to="/productos" className={estilos['encabezado__nav-enlace']}>Productos</Link>
            </li>
            <li className={estilos['encabezado__nav-item']}>
              <Link to="/productos/nuevo" className={estilos['encabezado__nav-enlace']}>Añadir Producto</Link>
            </li>
            <li className={estilos['encabezado__nav-item']}>
              <Link to="/pedidos-proveedores" className={estilos['encabezado__nav-enlace']}>Pedidos Proveedores</Link>
            </li>
            <li className={estilos['encabezado__nav-item']}>
              <Link to="/pedidos-clientes" className={estilos['encabezado__nav-enlace']}>Pedidos Clientes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Encabezado;