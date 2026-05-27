package com.example.inventario.backend.controller;

import com.example.inventario.backend.dto.ProductoDto;
import com.example.inventario.backend.service.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@AllArgsConstructor
public class ProductoController {
    private ProductoService productoService;

    @PostMapping
    public ResponseEntity<ProductoDto> agregarProducto(@RequestBody ProductoDto productoDto) {
        ProductoDto productoGuardado = productoService.createProduct(productoDto);
        return new ResponseEntity<>(productoGuardado, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductoDto> consultarProducto(@PathVariable("id") Long productoId){
        ProductoDto productoDto = productoService.getProductById(productoId);
        return ResponseEntity.ok(productoDto);
    }

    @GetMapping
    public ResponseEntity<List<ProductoDto>> obtenerTodosProductos(){
        List<ProductoDto> productos = productoService.getAllProducts();
        return ResponseEntity.ok(productos);
    }
}
