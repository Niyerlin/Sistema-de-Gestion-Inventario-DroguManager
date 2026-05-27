package com.example.inventario.backend.service;

import com.example.inventario.backend.dto.ProductoDto;

import java.util.List;

public interface ProductoService {
    ProductoDto createProduct(ProductoDto productoDto);
    ProductoDto getProductById(Long productoId);
    List<ProductoDto> getAllProducts();
}
