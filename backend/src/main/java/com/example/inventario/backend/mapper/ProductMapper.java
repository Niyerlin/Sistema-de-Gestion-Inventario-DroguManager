package com.example.inventario.backend.mapper;

import com.example.inventario.backend.dto.ProductoDto;
import com.example.inventario.backend.model.Producto;

public class ProductMapper {
    public static ProductoDto mapToProductoDto(Producto producto){
        return new ProductoDto(
                producto.getId(),
                producto.getNombre(),
                producto.getPrecio(),
                producto.getCantidadEnStock()
        );
    }
    public static Producto mapToProducto(ProductoDto productoDto){
        return new Producto(
                productoDto.getId(),
                productoDto.getNombre(),
                productoDto.getPrecio(),
                productoDto.getCantidadEnStock()
        );
    }
}
