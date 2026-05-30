import { useState, useEffect } from 'react';
import { obtenerPedidos } from '../../services/api';

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerPedidos()
      .then(setPedidos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card mt-2">
      <h2 style={{ color: 'var(--color-primary)' }}>Mis Pedidos</h2>
      {loading ? <p>Cargando pedidos...</p> : 
       pedidos.length === 0 ? <p>No has realizado pedidos aún.</p> : (
        <div className="grid">
          {pedidos.map(pedido => (
            <div key={pedido.id} className="card mb-2" style={{ border: '1px solid #ddd', padding: '1rem' }}>
              <p><strong>Pedido ID:</strong> {pedido.id}</p>
              <p><strong>Fecha:</strong> {new Date(pedido.fecha).toLocaleDateString()}</p>
              <p><strong>Estado:</strong> {pedido.estado}</p>
              <p><strong>Total:</strong> ${pedido.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PedidosPage;
