console.log("Conectado");
//Aqui trabajo, variable nombre, con su respectivo condicional,  "While", validaciones.
let nombre;
while (true) {
    nombre = prompt("Ingrese su nombre:");
    if (/^[A-Za-z\s]*$/.test(nombre) && nombre !== null && nombre.trim() !== "") {
        break;
    } else {
        alert("Debe ingresar un nombre válido.");
    }
}
console.log(nombre);
//Aqui trabajo, variable apellido, con su respectivo condicional,  "While", validaciones.
let apellido;
while (true) {
    apellido = prompt("Ingrese su apellido:");
    if (/^[A-Za-z\s]*$/.test(apellido) &&  apellido !== null && apellido.trim() !== "") {
        break;
    } else {
        alert("Debe ingresar un apellido válido.");
    }
}
console.log(apellido);

//Aqui trabajo el ciclo while, junto con la condicion, y le agregue la funcion confirm.
while (true) {
    let cantidadMadera = prompt("¿Cuantos cortes de madera te gustaría llevar?");
    console.log(cantidadMadera);

    if (!isNaN(cantidadMadera) && cantidadMadera !== '') {
        cantidadMadera = parseInt(cantidadMadera);

        if (cantidadMadera >= 30) {
            alert("Para las compras mayores o igual a 30 unidades, hay un 20% de descuento por ser compra mayorista");
        } else if (cantidadMadera >= 10 && cantidadMadera < 30) {
            alert("Para las compras mayores a 10 unidades y menores a 30 unidades, hay un 10% de descuento por ser compra minorista");
        } else if (cantidadMadera >= 1 && cantidadMadera < 10) {
            alert("El envío es gratuito por ayudarnos a fomentar nuestra página online");
        } else {
            alert("Note que no seleccionó ninguna de las opciones posibles. Si solo quiere navegar por nuestro sitio web, sea bienvenido.");
        }
    } else {
        alert("La cantidad de madera ingresada no es un número válido.");
    }

    let continuar = confirm("¿Le gustaria cambiar la cantidad de unidades seleccionada?");
    if (!continuar) {
        break;
    }
}

alert(nombre + " " + apellido + ", en nombre de toda la empresa, esperamos que te encuentres muy bien en el día de hoy, bienvenido a nuestro sitio web.");
