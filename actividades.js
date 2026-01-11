const prompt = require('prompt-sync')();

/*● Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.*/
/*
let numero1 = Number(prompt("Ingrese el primer número: "));
let numero2 = Number(prompt("Ingrese el segundo número: "));

if (numero1 > numero2) {
    console.log("El número mayor es: ", numero1);
} else if (numero2 > numero1) {
    console.log("El número mayor es: ", numero2);
} else {
    console.log("Los dos números son iguales");
}
*/

/*● Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.*/
/*
const RANGO_MINIMO = 0;
const RANGO_MAXIMO = 18;

let numero = Number(prompt("Ingrese un número: "));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango");
} else {
    console.log("El número está fuera del rango");
}
*/

/*● Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.*/
/*
let condicion1 = prompt("Ingresá true o false para la condición 1: ").toLowerCase() === "true";
let condicion2 = prompt("Ingresá true o false para la condición 2: ").toLowerCase() === "true";
// con === "true" convierto el texto en booleano y con .toLowerCase() normalizo la entrada del usuario.

console.log("*****Resultados Lógicos*****");
console.log("Condición 1 AND Condición 2:", condicion1 && condicion2);
console.log("Condición 1 OR Condición 2:", condicion1 || condicion2);
console.log("NOT Condición 1:", !condicion1);
console.log("NOT Condición 2:", !condicion2);
*/

/*● Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.*/
/*
let nombre = prompt("Ingresá tu nombre:").toLowerCase();

if (nombre === "lilen") {
    console.log("Hola Lilen, tu nombre coincide.");
} else {
    console.log("Tu nombre no coincide.");
}
*/

/*● Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.*/
/*
let numero1 = Number(prompt("Ingresá el primer número: "));
let numero2 = Number(prompt("Ingresá el segundo número: "));
let numero3 = Number(prompt("Ingresá el tercer número: "));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El mayor es:", numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El mayor es:", numero2);
} else {
    console.log("El mayor es:", numero3);
}
*/

/*● Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.*/
/*
let edad = Number(prompt("Ingrese su edad: "));

if (edad >= 18) {
    console.log("Sos mayor de edad. Acceso permitido.");
} else {
    console.log("Sos menor de edad. Acceso restringido.");
}
*/

/*● Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)*/
/*
let pesoKg = Number(prompt("Ingresá tu peso en kilogramos: "));
let pesoLibras = pesoKg * 2.20462;

console.log("Tu peso en libras es:", pesoLibras.toFixed(2));
*/

/*● Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)*/
/*
let lado1 = Number(prompt("Ingresá el primer lado: "));
let lado2 = Number(prompt("Ingresá el segundo lado: "));
let lado3 = Number(prompt("Ingresá el tercer lado: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}
*/

/*● Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.*/
/*
const PI = 3.14159;

let radio = Number(prompt("Ingresá el radio del círculo: "));

let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log("El área del círculo es: ", area.toFixed(2));
console.log("El perímetro del círculo es: ", perimetro.toFixed(2));
*/

/*● Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error.*/

let dia = parseInt(prompt("Ingresá un número del 1 al 7: "));

if (dia === 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else if (dia === 3) {
    console.log("Miércoles");
} else if (dia === 4) {
    console.log("Jueves");
} else if (dia === 5) {
    console.log("Viernes");
} else if (dia === 6) {
    console.log("Sábado");
} else if (dia === 7) {
    console.log("Domingo");
} else {
    console.log("Error, número fuera del rango válido (1 al 7).");
}

