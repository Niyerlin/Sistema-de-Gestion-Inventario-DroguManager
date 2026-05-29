import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListProductoComponent = () => {
    const [productos] = useState([
        { id: 1, nombre: "Paracetamol", precio: 15.50, stock: 100 },
        { id: 2, nombre: "Ibuprofeno", precio: 20.00, stock: 50 },
        { id: 3, nombre: "Amoxicilina", precio: 45.90, stock: 25 }
    ]);


    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white text-center">
                    <h3>Lista de Productos</h3>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary mb-3" onClick={() => navigate('/add-producto')}>
                        Añadir Producto
                    </button>

                    <table className="table table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(producto => (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td className="fw-bold">${producto.precio.toFixed(2)}</td>
                                    <td>
                                        <span className={`badge ${producto.stock < 30 ? 'bg-danger' : 'bg-success'}`}>
                                            {producto.stock}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListProductoComponent;