//uso estricto en declaraciones JS
"use strict"

// Carga de la función determinarMontoDolar usando la biblioteca de eventos JS
document.querySelector('#btnCalcularDolar').addEventListener('click', determinarMontoDolar);

function determinarMontoDolar() {
    let montoDolar = 0;
    let cambioDolar = 0;
    let totalColon = 0;
       
    // Conversiones usando el método querySelector
    montoDolar = Number(document.querySelector('#txtMontoDolar').value);
    cambioDolar = Number(document.querySelector('#txtCambioDolar').value);
    
    // Cálculos
    totalColon = montoDolar * cambioDolar;
    
    // Asignación de valor a la variable del monto final
    document.querySelector('#txtTotalColon').textContent = totalColon;
}

// Carga de la función determinarMontoColon usando la biblioteca de eventos JS
document.querySelector('#btnCalcularColon').addEventListener('click', determinarMontoColon);

function determinarMontoColon() {
    let montoColon = 0;
    let cambioDolar = 0;
    let totalDolar = 0;
       
    // Conversiones usando el método querySelector
    montoColon = Number(document.querySelector('#txtMontoColon').value);
    cambioDolar = Number(document.querySelector('#txtCambioColon').value);
    
    // Cálculos
    totalDolar = montoColon / cambioDolar;
    
    // Asignación de valor a la variable del monto final
    document.querySelector('#txtTotalDolar').textContent = totalDolar;
}

// Función para limpiar los campos
function btnlimpiar() {
    document.getElementById('txtMontoDolar').value = "";
    document.getElementById('txtCambioDolar').value = "";
    document.getElementById('txtTotalColon').textContent = "";
    
    document.getElementById('txtMontoColon').value = "";
    document.getElementById('txtCambioColon').value = "";
    document.getElementById('txtTotalDolar').textContent = "";
}