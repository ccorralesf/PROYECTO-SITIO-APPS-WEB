"use strict";

// Cargar la función determinarMontoFinal usando la biblioteca de eventos JS
document.querySelector('#btnCalcular').addEventListener('click', determinarMontoFinal);

function determinarMontoFinal() {
    // Obtener los valores de los campos
    let cliente = document.querySelector('#txtCliente').value;
    let articulo = document.querySelector('#txtArticulo').value;
    let cantidad = Number(document.querySelector('#txtCantidad').value);
    let precio = Number(document.querySelector('#txtPrecio').value);
    
    // Validar si hay campos vacíos
    if (!cliente || cliente === "" || !articulo || articulo === "" || !cantidad || cantidad === 0 || !precio || precio === 0) {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Hay espacios en blanco"
        });
        return; // Salir de la función si la validación falla
    }

    // Realizar cálculos
    let subTotal = precio * cantidad;
    let iva = subTotal * 13 / 100;
    let servicio = subTotal * 5 / 100;
    let total = subTotal + iva + servicio;

    // Asignar valores a los campos de resultado
    document.querySelector('#txtResultadoFacturaNombre').value = cliente;
    document.querySelector('#txtResultadoFacturaArticulo').value = articulo;
    document.querySelector('#txtResultadoFacturaCantidad').value = cantidad;
    document.querySelector('#txtResultadoFacturaPrecio').value = precio;
    document.querySelector('#txtResultadoFacturaSubTotal').value = subTotal;
    document.querySelector('#txtResultadoFacturaIva').value = iva;
    document.querySelector('#txtResultadoFacturaServicio').value = servicio;
    document.querySelector('#txtResultadoFacturaTotal').value = total;
}

function btnlimpiar() {
    // Limpiar todos los campos
    document.getElementById('txtCliente').value = "";
    document.getElementById('txtArticulo').value = "";
    document.getElementById('txtCantidad').value = "";
    document.getElementById('txtPrecio').value = "";
    document.getElementById('txtResultadoFacturaNombre').value = "";
    document.getElementById('txtResultadoFacturaArticulo').value = "";
    document.getElementById('txtResultadoFacturaCantidad').value = "";
    document.getElementById('txtResultadoFacturaPrecio').value = "";
    document.getElementById('txtResultadoFacturaSubTotal').value = "";
    document.getElementById('txtResultadoFacturaIva').value = "";
    document.getElementById('txtResultadoFacturaServicio').value = "";
    document.getElementById('txtResultadoFacturaTotal').value = "";
}