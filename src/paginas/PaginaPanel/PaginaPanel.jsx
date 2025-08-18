import React from 'react';
import estilos from './PaginaPanel.module.css';
import usarDatosInventario from '../../hooks/useDatosInventario';

const PaginaPanel = () => {
  const { productos } = usarDatosInventario();

  const totalProductos = productos.length;
  const stockTotal = productos.reduce((suma, producto) => suma + producto.stock, 0);
  const productosBajoStock = productos.filter(producto => producto.stock < 10);

  return (
    <div className={estilos.panel}>
      <h1 className={estilos.panel__titulo}>Inventario</h1>
      <div className={estilos['panel__resumen-grid']}>
        <div className={estilos['panel__resumen-tarjeta']}>
          <h2 className={estilos['panel__resumen-tarjeta-titulo']}>Total de Productos</h2>
          <p className={estilos['panel__resumen-tarjeta-valor']}>{totalProductos}</p>
        </div>
        <div className={estilos['panel__resumen-tarjeta']}>
          <h2 className={estilos['panel__resumen-tarjeta-titulo']}>Stock Total</h2>
          <p className={estilos['panel__resumen-tarjeta-valor']}>{stockTotal}</p>
        </div>
        <div className={estilos['panel__resumen-tarjeta']}>
          <h2 className={estilos['panel__resumen-tarjeta-titulo']}>Productos con Poco Stock</h2>
          <p className={estilos['panel__resumen-tarjeta-valor']}>{productosBajoStock.length}</p>
          {productosBajoStock.length > 0 && (
            <ul className={estilos['panel__lista-bajo-stock']}>
              {productosBajoStock.map(producto => (
                <li key={producto.id}>{producto.nombre} (Stock: {producto.stock})</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginaPanel;