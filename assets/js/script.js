// Funcion que permite mostrar un boton Volver en la pagina
function botonVolver() {
    document.write("<br><br><br>")
    // Crea variable con la carga de un boton volver
    var btV = '<button onclick="javascript:window.location.reload();">Volver</button>'
    // Imprime el boton en la pagina
    document.write(btV)
}

let ejecutar = () => {
    // Se invoca funcion que solicita un numero
    var numero = pedirNumero()

    // Valida retorno de la funcion que permite ingresar un numero
    if (numero > 0) {
        //Imprime resultado de los calculos
        document.write("<h3>Resultado de Tabla y Factorial</h3>")
        console.log("Resultado de Tabla y Factorial")
        // Se invoca funcion que imprime las tablas
        tablas(numero)
        // Se invoca funcion que imprime el factorial
        factorial(numero)
    }

    // Presenta boton para volver
    botonVolver()
}

// Se crea funcion que permite ingresar un numero para calculos
let pedirNumero = () => {
    // Se solicita ingresar un numero
    var numero = prompt("Ingrese un número entre 1 y 20:", 3)
    var numero = parseInt(numero)
    // Valida que el numero ingresado esté entre 1 y 20
    if (String(numero) == 'NaN' || numero < 1 || numero > 20) {
        numero = 0
        document.write("<br>")
        document.write("número fuera del rango")
        console.log("número fuera del rango")
    }
    return numero
}

// Se crea funcion que calcula la tabla de Multiplicación del numero ingresado
let tablas = (numero) => {
    for (var i = 1; i <= numero; i++) {
        document.write("<br>")
        document.write(i + " x " + numero + " = " + (i * numero))
        console.log(i + " x " + numero + " = " + (i * numero))
    }
}

// Se crea funcion que calcula el factorial de cada numero hasta llegar al valor ingresado
let factorial = (numero) => {
    var fac = 1
    for (var i = 1; i <= numero; i++) {
        for (var f = 1; f <= i; f++) {
            if (f == 1) {
                fac = f
            }
            fac = fac * f
        }
        document.write("<br>")
        document.write("Factorial de " + i + " es: " + fac)
        console.log("Factorial de " + i + " es: " + fac)
    }
}