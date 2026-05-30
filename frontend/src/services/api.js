const API_BASE = '/api';

// Función auxiliar unificada para manejar respuestas
const parseResponse = async (response) => {
  // Primero leemos el texto, ya que la respuesta solo se puede leer una vez
  const bodyText = await response.text();
  
  let data;
  try {
    data = bodyText ? JSON.parse(bodyText) : {};
  } catch (e) {
    data = { message: bodyText };
  }
  
  if (!response.ok) {
    // Si hay un error, lanzamos el mensaje del backend o un error genérico
    throw new Error(data.message || data.error || `Error ${response.status}: ${response.statusText}`);
  }
  
  return data;
};

export const loginUsuario = async (email, password) => {
  const response = await fetch(`${API_BASE}/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return parseResponse(response);
};

export const registrarUsuario = async (nombre, email, password, rol) => {
  const response = await fetch(`${API_BASE}/usuarios/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, password, rol })
  });
  return parseResponse(response);
};

export const obtenerProductos = async () => {
  const response = await fetch(`${API_BASE}/productos`);
  return parseResponse(response);
};


export const crearProducto = async (producto) => {
  const response = await fetch(`${API_BASE}/productos`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(producto)
  });
  return parseResponse(response);
};

export const obtenerPedidos = async () => {
  const response = await fetch(`${API_BASE}/pedidos`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return parseResponse(response);
};


export const crearPedido = async (detallesPedido) => {
  const response = await fetch(`${API_BASE}/pedidos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(detallesPedido)
  });
  
  return parseResponse(response);
};

export const listarFacturas = async () => {
  const response = await fetch(`${API_BASE}/facturas`);
  if (!response.ok) throw new Error('Error al listar facturas');
  return response.json();
};

export const obtenerFactura = async (facturaId) => {
  const response = await fetch(`${API_BASE}/facturas/${facturaId}`);
  if (!response.ok) throw new Error('Factura no encontrada');
  return response.json();
};

export const obtenerFacturaPorPedido = async (pedidoId) => {
  const response = await fetch(`${API_BASE}/facturas/pedido/${pedidoId}`);
  if (!response.ok) throw new Error('Factura no encontrada para el pedido');
  return response.json();
};

export const generarFactura = async (pedidoId) => {
  const response = await fetch(`${API_BASE}/facturas/generar/${pedidoId}`, {
    method: 'POST'
  });
  if (!response.ok) throw new Error('No se pudo generar la factura');
  return response.json();
};

