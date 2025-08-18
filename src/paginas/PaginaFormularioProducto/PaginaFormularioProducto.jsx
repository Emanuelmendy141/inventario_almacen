import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import CampoEntrada from '../../componentes/CampoEntrada/CampoEntrada.jsx'; 
import Boton from '../../componentes/Boton/Boton.jsx'; 
import estilos from './PaginaFormularioProducto.module.css'; 

const PaginaFormularioProducto = () => {
  const navegar = useNavigate();
  const [datosProducto, setDatosProducto] = useState({
    nombre: '',
    categoria: '',
    fabricante: '',
    descripcion: '',
    precio: '',
    stock: '',
    urlImagen: '',
  });

  const manejarCambio = (e) => {
    const { id, value } = e.target;
    setDatosProducto(prevDatos => ({
      ...prevDatos,
      [id]: value
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Nuevo Producto a añadir (simulado):', datosProducto);
    alert('Producto añadido (simulado). Ver consola para los datos.');
    navegar('/productos');
  };

  return (
    <div className={estilos['pagina-formulario-producto']}>
      <h1 className={estilos['pagina-formulario-producto__titulo']}>Añadir Nuevo Producto</h1>
      <form onSubmit={manejarEnvio} className={estilos['formulario-producto']}>
        <CampoEntrada
          etiqueta="Nombre del Producto"
          id="nombre"
          value={datosProducto.nombre}
          onChange={manejarCambio}
          placeholder="Ej: Laptop Dell"
          required
        />
        <CampoEntrada
          etiqueta="Categoría"
          id="categoria"
          value={datosProducto.categoria}
          onChange={manejarCambio}
          placeholder="Ej: Computo"
          required
        />
        <CampoEntrada
          etiqueta="Fabricante"
          id="fabricante"
          value={datosProducto.fabricante}
          onChange={manejarCambio}
          placeholder="Ej: Dell"
          required
        />
        <CampoEntrada
          etiqueta="Descripción"
          id="descripcion"
          value={datosProducto.descripcion}
          onChange={manejarCambio}
          placeholder="Descripción detallada del producto"
        />
        <CampoEntrada
          etiqueta="Precio"
          id="precio"
          type="number"
          value={datosProducto.precio}
          onChange={manejarCambio}
          placeholder="0.00"
          step="0.01"
          required
        />
        <CampoEntrada
          etiqueta="Stock"
          id="stock"
          type="number"
          value={datosProducto.stock}
          onChange={manejarCambio}
          placeholder="0"
          required
        />
        <CampoEntrada
          etiqueta="URL de Imagen"
          id="urlImagen"
          value={datosProducto.urlImagen}
          onChange={manejarCambio}
          placeholder="ruta local de la imagen"
        />
        <Boton type="submit" variante="primario">Guardar Producto</Boton>
      </form>
    </div>
  );
};

export default PaginaFormularioProducto;