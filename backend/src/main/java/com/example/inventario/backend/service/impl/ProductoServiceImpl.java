package com.example.inventario.backend.service.impl;

import com.example.inventario.backend.dto.ProductoDto;
import com.example.inventario.backend.exception.ResourceNotFoundException;
import com.example.inventario.backend.mapper.ProductMapper;
import com.example.inventario.backend.model.Producto;
import com.example.inventario.backend.repository.ProductoRepository;
import com.example.inventario.backend.service.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductoServiceImpl implements ProductoService {

    private ProductoRepository productoRepository;

    @Override
    public ProductoDto createProduct(ProductoDto productoDto) {
        Producto producto = ProductMapper.mapToProducto(productoDto);
        Producto productoGuardado = productoRepository.save(producto);
        return ProductMapper.mapToProductoDto(productoGuardado);
    }

    @Override
    public ProductoDto getProductById(Long productoId) {
        Producto producto = productoRepository.findById(productoId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Producto no existe con el id: " + productoId));
        return ProductMapper.mapToProductoDto(producto);
    }

    @Override
    public List<ProductoDto> getAllProducts() {
        List<Producto> productos = productoRepository.findAll();
        return productos.stream().map(ProductMapper::mapToProductoDto)
                .toList();
    }
}
