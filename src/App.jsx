import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './estructura/Encabezado/Encabezado'; 
import PaginaPanel from './paginas/PaginaPanel/PaginaPanel.jsx';
import PaginaListaProductos from './paginas/PaginaListaProductos/PaginaListaProductos.jsx';
import PaginaDetalleProducto from './paginas/PaginaDetalleProducto/PaginaDetalleProducto.jsx';
import PaginaFormularioProducto from './paginas/PaginaFormularioProducto/PaginaFormularioProducto.jsx';
import PaginaListaPedidosProveedor from './paginas/PaginaListaPedidosProveedor/PaginaListaPedidosProveedor.jsx'; 
import PaginaListaPedidosCliente from './paginas/PaginaListaPedidosCliente/PaginaListaPedidosCliente.jsx';

import './estilos/base.css';
import './index.css';

function App() {
  return (
    <Router>
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<PaginaPanel />} />
          <Route path="/productos" element={<PaginaListaProductos />} />
          <Route path="/productos/nuevo" element={<PaginaFormularioProducto />} />
          <Route path="/productos/:id" element={<PaginaDetalleProducto />} />
          <Route path="/pedidos-proveedores" element={<PaginaListaPedidosProveedor />} />
          <Route path="/pedidos-clientes" element={<PaginaListaPedidosCliente />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px', fontSize: '2rem' }}>404 - Página No Encontrada</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;