import React from 'react';
import { Link } from 'react-router-dom'; 
import Boton from '../../componentes/Boton/Boton.jsx'; 
import estilos from './PaginaListaPedidosProveedor.module.css'; 


const pedidosProveedorMock = [
  { id: 'PP001', fecha: '2025-06-28', proveedor: 'Tech Supply Co.', estado: 'En Proceso', totalItems: 5 },
  { id: 'PP002', fecha: '2025-06-20', proveedor: 'Global Parts Inc.', estado: 'Completado', totalItems: 10 },
  { id: 'PP003', fecha: '2025-06-15', proveedor: 'Electronics World', estado: 'Pendiente', totalItems: 3 },
  { id: 'PP004', fecha: '2025-06-10', proveedor: 'Components R Us', estado: 'Cancelado', totalItems: 2 },
  { id: 'PP005', fecha: '2025-06-05', proveedor: 'Office Depot', estado: 'Completado', totalItems: 7 },
];

const PaginaListaPedidosProveedor = () => {
  return (
    <div className={estilos['pagina-lista-pedidos']}>
      <h1 className={estilos['pagina-lista-pedidos__titulo']}>Pedidos a Proveedores</h1>
      <div className={estilos['pagina-lista-pedidos__controles']}>
        <Link to="/pedidos-proveedores/nuevo">
          <Boton variante="primario">Crear Nuevo Pedido</Boton>
        </Link>
      </div>
      <table className={estilos['tabla-pedidos']}>
        <thead className={estilos['tabla-pedidos__cabecera']}>
          <tr className={estilos['tabla-pedidos__fila']}>
            <th className={estilos['tabla-pedidos__encabezado']}>ID Pedido</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Fecha</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Proveedor</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Estado</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Total Ítems</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Acciones</th>
          </tr>
        </thead>
        <tbody className={estilos['tabla-pedidos__cuerpo']}>
          {pedidosProveedorMock.map(pedido => (
            <tr key={pedido.id} className={estilos['tabla-pedidos__fila']}>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.id}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.fecha}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.proveedor}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.estado}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.totalItems}</td>
              <td className={estilos['tabla-pedidos__dato']}>
                <Boton variante="exito" onClick={() => alert(`Editar Pedido de Proveedor: ${pedido.id}`)}>Editar</Boton>
                <Boton variante="peligro" onClick={() => alert(`Eliminar Pedido de Proveedor: ${pedido.id}`)}>Eliminar</Boton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginaListaPedidosProveedor;