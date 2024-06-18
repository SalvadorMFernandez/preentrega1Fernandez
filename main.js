function consultarCotizacion() {
    // Obtener nombre y apellido del usuario
    let nombre = prompt("Por favor, ingresa tu nombre: (ESC para salir)");
    while (nombre != "ESC") {
        let apellido = prompt("Ahora, ingresa tu apellido:");
        let edad = prompt("Ahora, ingresa tu edad:")


        // Validar si es mayor de edad (mayor o igual a 18 años)
        if (edad < 18) {
            alert(`Lo siento, ${nombre} ${apellido}. Debes ser mayor de edad para realizar esta consulta y compra.`);
            return;
        }

        // Simular consulta de cotización del USD
        const cotizacionUSD = 1295; // Ejemplo de cotización en pesos argentinos por 1 USD

        let cantidadDeusdAcomprar = parseInt(prompt("Cuantos U$D queres comprar?"));


        // Mostrar resultado al usuario
        alert(`Hola, ${nombre} ${apellido}. Tienes ${edad} años.` + `\nLa cotización actual del USD es: $${cotizacionUSD.toFixed(2)} ARS por 1 USD.` +`\nPuedes realizar tu compra con pesos argentinos.` + "\nDebes abonar: " + (parseFloat(PesosaPagar = cotizacionUSD * cantidadDeusdAcomprar)));
    

    }

}

// Llamar a la función para iniciar la consulta
consultarCotizacion();
