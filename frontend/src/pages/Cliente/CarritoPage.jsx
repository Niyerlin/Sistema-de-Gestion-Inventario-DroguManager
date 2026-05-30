import { useCarrito } from "../../context/CarritoContext";

const CarritoPage = () => {
  const { carrito, eliminarDelCarrito } = useCarrito();
  
  // Cálculo seguro del total
  const total = carrito.reduce((sum, item) => sum + (Number(item.precio) || 0), 0);

  return (
    <div className="card mt-2">
      <h2 style={{ color: 'var(--color-primary)' }}>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="lista-carrito">
            {carrito.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '10px', 
                  borderBottom: '1px solid #ccc' 
                }}
              >
                <span>{item.nombre}</span>
                <span>${Number(item.precio || 0).toFixed(2)}</span>
                <button 
                  onClick={() => eliminarDelCarrito(item.id)} 
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <h3 className="mt-3">Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CarritoPage;
