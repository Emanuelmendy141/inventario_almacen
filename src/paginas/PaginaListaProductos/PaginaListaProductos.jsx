import React from 'react';
import { Link } from 'react-router-dom'; 
import TarjetaProducto from '../../componentes/TarjetaProducto/TarjetaProducto.jsx'; 
import BarraBusqueda from '../../componentes/BarraBusqueda/BarraBusqueda.jsx'; 
import Boton from '../../componentes/Boton/Boton.jsx'; 
import usarDatosInventario from '../../hooks/useDatosInventario'; 
import estilos from './PaginaListaProductos.module.css'; 

const PaginaListaProductos = () => {
  const { productosFiltrados, terminoBusqueda, setTerminoBusqueda } = usarDatosInventario();

  return (
    <div className={estilos['pagina-lista-productos']}>
      <h1 className={estilos['pagina-lista-productos__titulo']}>Productos</h1>
      <div className={estilos['pagina-lista-productos__controles']}>
        <BarraBusqueda terminoBusqueda={terminoBusqueda} alCambiarBusqueda={setTerminoBusqueda} />
        <Link to="/productos/nuevo">
          <Boton variante="primario">Añadir Nuevo Producto</Boton>
        </Link>
      </div>
      {productosFiltrados.length === 0 ? (
        <p className={estilos['pagina-lista-productos__sin-resultados']}>No se encontraron productos.</p>
      ) : (
        <div className={estilos['pagina-lista-productos__grid']}>
          {productosFiltrados.map(producto => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginaListaProductos;