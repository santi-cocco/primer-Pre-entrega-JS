// Esta va a ser la función para obtener la entrada del usuario con validación
function obtenerEntrada(mensaje, validacion) {
    while (true) {
        let entrada = prompt(mensaje);
        if (validacion(entrada)) {
            return entrada.trim();
        } else {
            alert("Entrada inválida. Por favor, inténtelo nuevamente.");
        }
    }
}
// Llamado de las funciones para obtener nombre y apellido
let nombre = obtenerEntrada("Ingrese su nombre:", (entrada) => /^[A-Za-z]*$/.test(entrada));
let apellido = obtenerEntrada("Ingrese su apellido:", (entrada) => /^[A-Za-z]*$/.test(entrada));
// Mostrar mensaje de bienvenida
alert(`Bienvenido a nuestra tienda de maderas, ${nombre} ${apellido}!`);
// Array inicial de tipos de madera y precios.
const tiposDeMadera = [
    { nombre: "abedul", precio: "($18/cm²)" },
    { nombre: "aliso", precio: "($12/cm²)" },
    { nombre: "caoba", precio: "($15/cm²)" },
    { nombre: "cipres", precio: "($8/cm²)" },
    { nombre: "pino", precio: "($7/cm²)" },
    { nombre: "cedro", precio: "($9/cm²)" },
    { nombre: "haya", precio: "($18/cm²)" },
    { nombre: "roble", precio: "($20/cm²)" },
    { nombre: "nogal", precio: "($22/cm²)" },
    { nombre: "guatambu", precio: "($17/cm²)" },
    { nombre: "incienso", precio: "($19/cm²)" },
    { nombre: "acacia", precio: "($16/cm²)" },
    { nombre: "teca", precio: "($25/cm²)" },
];
// Aqui voy a almacenar las selecciones del usuario
const seleccionesUsuario = [];
// Pregunta,   si desea comenzar la selección
let comenzarSeleccion = confirm("¿Le gustaría comenzar la selección de madera?");
if (!comenzarSeleccion) {
    alert("Gracias por visitar nuestra tienda.");
} else {
    while (true) {
        // Solicitar al usuario que elija un tipo de madera
        const opcionesMadera = tiposDeMadera.map((tipo) => `${tipo.nombre} ${tipo.precio}`).join('\n');
        const tipoMaderaElegido = prompt(`¿Qué tipo de madera estás buscando? \n Opciones:\n${opcionesMadera}`);
        // Verificar si el tipo de madera elegido es válido
        const tipoEncontrado = tiposDeMadera.find((tipo) => tipo.nombre.toLowerCase() === tipoMaderaElegido.toLowerCase());     
        // Mostrar mensaje basado en la verificación
        if (tipoEncontrado) {
            alert(`Excelente elección. Usted está buscando ${tipoEncontrado.nombre}.`);
        } else {
            alert("Lo siento, el tipo de madera ingresado no es válido. Por favor, vuelva a intentarlo.");
            continue;  // Vuelve al inicio del bucle si la selección no es válida
        }
// Solicitar al usuario la cantidad de unidades
while (true) {
    let inputCantidadMadera = prompt("¿Cuantas unidades de madera te gustaría llevar?");
    // Validar si es un número
    if (!isNaN(inputCantidadMadera) && inputCantidadMadera !== '') {
        cantidadMadera = parseInt(inputCantidadMadera);
    
        // Verificar si la cantidad es mayor que cero
        if (cantidadMadera > 0) {
            break; // Salir del bucle si la entrada es válida
        } else {
            alert("Por favor, ingrese un número mayor que cero.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}
// Función para obtener una dimensión (ancho o largo) de la madera
function obtenerDimension(nombreDimension) {
    let dimension = prompt(`Ingrese el ${nombreDimension} de la madera en cm:`);

    // Validar la entrada para asegurarte de que el usuario ingrese un número válido y mayor que cero
    while (isNaN(dimension) || dimension <= 0) {
        alert(`Por favor, ingrese un número válido y mayor que cero para el ${nombreDimension} de la madera.`);
        dimension = prompt(`Ingrese el ${nombreDimension} de la madera en cm:`);
    }
    return dimension;
}
// Solicitar al usuario el ancho y largo de la madera utilizando la función
let anchoMadera = obtenerDimension("ancho");
let largoMadera = obtenerDimension("largo");
// Calcular los metros cuadrados totales
metrosCuadradosTotales = cantidadMadera * anchoMadera * largoMadera;
// Realizar descuentos según la cantidad de metros cuadrados
let descuento = 0;
if (metrosCuadradosTotales >= 100000) {
    descuento = 20;
} else if(metrosCuadradosTotales >= 10000 && metrosCuadradosTotales < 100000) {
    descuento = 10;
}
// Almacenar la selección en el array
seleccionesUsuario.push({
    tipoMadera: tipoEncontrado.nombre,
    cantidad: cantidadMadera,
    metrosCuadradosTotales: metrosCuadradosTotales,
    descuento: descuento,
});

// Mostrar mensaje de descuento
alert(`¡Descuento aplicado! Por comprar ${metrosCuadradosTotales} cm², obtiene un ${descuento}% de descuento.`);

// Preguntar si quiere hacer otra selección
let continuar = confirm("¿Le gustaría hacer otra selección?");
if (!continuar) {
    break;  // Sale del bucle principal si no desea continuar
}}}
// Mostrar resumen de selecciones al usuario
let resumen = `Resumen de selecciones:\n\nNombre: ${nombre}\nApellido: ${apellido}\n\n`;
for (const seleccion of seleccionesUsuario) {
resumen += `Tipo de Madera: ${seleccion.tipoMadera}\nCantidad: ${seleccion.cantidad}\nMetros Cuadrados: ${seleccion.metrosCuadradosTotales} cm²\nDescuento: ${seleccion.descuento}%\n\n`;
}
alert(`¡Gracias por elegir nuestros productos, ${nombre} ${apellido}! Aquí está un resumen de tus selecciones:\n\n${resumen}`);
console.log(resumen);
