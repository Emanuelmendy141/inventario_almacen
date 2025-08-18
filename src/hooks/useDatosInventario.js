import { useState, useEffect } from 'react';
import datosProductos from '../datos/Productos'; 


const useDatosInventario = (terminoBusquedaInicial = '') => {
  const [productos, setProductos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState(terminoBusquedaInicial);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductos(datosProductos);
  }, []);

  useEffect(() => {
    const terminoBusquedaMin = terminoBusqueda.toLowerCase();
    const filtrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(terminoBusquedaMin) ||
      producto.categoria.toLowerCase().includes(terminoBusquedaMin) ||
      producto.fabricante.toLowerCase().includes(terminoBusquedaMin) ||
      producto.descripcion.toLowerCase().includes(terminoBusquedaMin)
    );
    setProductosFiltrados(filtrados);
  }, [productos, terminoBusqueda]);

  return { productosFiltrados, terminoBusqueda, setTerminoBusqueda, productos };
};

export default useDatosInventario;