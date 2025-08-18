import React from 'react';
import { Link } from 'react-router-dom'; 
import Boton from '../../componentes/Boton/Boton.jsx'; 
import estilos from './PaginaListaPedidosCliente.module.css'; 

const pedidosClienteMock = [
  { id: 'PC001', fecha: '2025-06-29', cliente: 'Juan Pérez', estado: 'Enviado', montoTotal: 200.00 },
  { id: 'PC002', fecha: '2025-06-25', cliente: 'María García', estado: 'Pendiente Envío', montoTotal: 150.00 },
  { id: 'PC003', fecha: '2025-06-18', cliente: 'Carlos López', estado: 'Entregado', montoTotal: 300.00 },
  { id: 'PC004', fecha: '2025-06-12', cliente: 'Ana Sánchez', estado: 'En Proceso', montoTotal: 85.50 },
  { id: 'PC005', fecha: '2025-06-01', cliente: 'Pedro Gómez', estado: 'Entregado', montoTotal: 520.00 },
];

const PaginaListaPedidosCliente = () => {
  return (
    <div className={estilos['pagina-lista-pedidos']}>
      <h1 className={estilos['pagina-lista-pedidos__titulo']}>Pedidos a Clientes</h1>
      <div className={estilos['pagina-lista-pedidos__controles']}>
        <Link to="/pedidos-clientes/nuevo">
          <Boton variante="primario">Crear Nuevo Pedido de Cliente</Boton>
        </Link>
      </div>
      <table className={estilos['tabla-pedidos']}>
        <thead className={estilos['tabla-pedidos__cabecera']}>
          <tr className={estilos['tabla-pedidos__fila']}>
            <th className={estilos['tabla-pedidos__encabezado']}>ID Pedido</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Fecha</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Cliente</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Estado</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Monto Total</th>
            <th className={estilos['tabla-pedidos__encabezado']}>Acciones</th>
          </tr>
        </thead>
        <tbody className={estilos['tabla-pedidos__cuerpo']}>
          {pedidosClienteMock.map(pedido => (
            <tr key={pedido.id} className={estilos['tabla-pedidos__fila']}>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.id}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.fecha}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.cliente}</td>
              <td className={estilos['tabla-pedidos__dato']}>{pedido.estado}</td>
              <td className={estilos['tabla-pedidos__dato']}>${pedido.montoTotal.toFixed(2)}</td>
              <td className={estilos['tabla-pedidos__dato']}>
                <Boton variante="exito" onClick={() => alert(`editar Pedido de Cliente: ${pedido.id}`)}>editar</Boton>
                <Boton variante="peligro" onClick={() => alert(`eliminar Pedido de Cliente: ${pedido.id}`)}>eliminar</Boton>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginaListaPedidosCliente;