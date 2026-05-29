import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductoFormComponent = () => {

    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const saveProducto = (e) => {
        e.preventDefault();
        console.log("Producto a guardar:", producto);
        navigate('/productos'); 
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4 border-0" style={{ backgroundColor: '#2c2f33', color: '#fff' }}>
                        <h3 className="text-center mb-4 fw-bold">Nuevo Producto</h3>
                        
                        <form onSubmit={saveProducto}>
                            <div className="mb-3">
                                <label className="form-label">Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    className="form-control bg-dark text-white border-secondary" 
                                    placeholder="Ej: Aspirina"
                                    value={producto.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    className="form-control bg-dark text-white border-secondary" 
                                    placeholder="0.00"
                                    value={producto.precio}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Stock Inicial</label>
                                <input 
                                    type="number" 
                                    name="stock" 
                                    className="form-control bg-dark text-white border-secondary" 
                                    placeholder="0"
                                    value={producto.stock}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="d-grid gap-2 mt-4">
                                <button type="submit" className="btn btn-primary fw-bold">Guardar Producto</button>
                                <button type="button" className="btn btn-secondary" onClick={() => navigate('/productos')}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoFormComponent;