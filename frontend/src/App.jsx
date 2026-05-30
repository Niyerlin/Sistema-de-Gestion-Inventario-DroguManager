import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CatalogoPage from './pages/cliente/CatalogoPage';
import PerfilPage from './pages/cliente/PerfilPage';
import CarritoPage from './pages/cliente/CarritoPage';
import PedidosPage from './pages/cliente/PedidosPage';
import { CarritoProvider } from './context/CarritoContext';
import ProductoFormComponent from './components/ProductoFormComponent'; 

const Placeholder = ({ title }) => (
  <div className="card text-center mt-2">
    <h2 style={{ color: 'var(--color-primary)' }}>{title}</h2>
    <p>Esta vista está en construcción.</p>
  </div>
);

function App() {
  return (
    <CarritoProvider>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />

            {/* Rutas de Cliente (COMPRADOR) */}
            <Route path="/cliente/inicio" element={
              <ProtectedRoute allowedRoles={['COMPRADOR']}>
                <CatalogoPage />
              </ProtectedRoute>
            } />
            
            <Route path="/cliente/carrito" element={
              <ProtectedRoute allowedRoles={['COMPRADOR']}>
                <CarritoPage /> 
              </ProtectedRoute>
            } />
            
            <Route path="/cliente/pedidos" element={
              <ProtectedRoute allowedRoles={['COMPRADOR']}>
                <PedidosPage /> 
              </ProtectedRoute>
            } />
            
            <Route path="/cliente/perfil" element={
              <ProtectedRoute allowedRoles={['COMPRADOR']}>
                <PerfilPage />
              </ProtectedRoute>
            } />

            {/* Rutas de Gestor */}
            <Route path="/gestor/inicio" element={
              <ProtectedRoute allowedRoles={['GESTOR_PEDIDOS']}>
                <Placeholder title="Gestión de Pedidos" />
              </ProtectedRoute>
            } />
            <Route path="/gestor/pedido/:id" element={
              <ProtectedRoute allowedRoles={['GESTOR_PEDIDOS']}>
                <Placeholder title="Controlar Pedido" />
              </ProtectedRoute>
            } />
            <Route path="/gestor/facturas" element={
              <ProtectedRoute allowedRoles={['GESTOR_PEDIDOS']}>
                <Placeholder title="Mis Facturas Generadas" />
              </ProtectedRoute>
            } />

            {/* Rutas de Admin */}
            <Route path="/admin/agregar-producto" element={
              <ProtectedRoute allowedRoles={['ADMIN_INVENTARIO']}>
                <ProductoFormComponent />
              </ProtectedRoute>
            } />
            
          </Routes>
        </main>
      </div>
    </CarritoProvider>
  );
}

export default App;