"use strict";
// console.log('Hola Mundo!!!');
/* Esto es un comentario
  en varias líneas
 */
// Tipos de Datos
Object.defineProperty(exports, "__esModule", { value: true });
const poo_1 = require("./poo");
// Boolean
let esActivo = true; // El ámbito es sólo en la función o bloque
var esActivo2 = false; // El ámbito es global en todo el archivo
const esActivo3 = false; // Constante, no se debe modificar
// Number
let entero = 5;
let real = 7.23;
let binario = 0b100;
let octal = 0o11;
let hexadecimal = 0xB;
let enteroLargo = 95654635654654n;
// String
let sigla = 'SIS257';
let detalle = `Desarrollo de Aplicación Int/Internet II`;
let concatenado = sigla + ' - ' + detalle;
let concatenado2 = `${sigla} - ${detalle}`;
let longitud = sigla.length;
let mayusculas = detalle.toUpperCase();
let minusculas = detalle.toLowerCase();
let reemplazo = detalle.replace(/ /g, '*');
let subcadena = detalle.substring(0, 8);
let separar = detalle.split(' ');
// Array
let array = ['uno', 'dos', 'tres'];
let arrayNum = [1, 2, 3, 4];
let arraySize = array.length;
let doble = arrayNum.map(n => n * 2);
let factorial = arrayNum.reduce((prev, curr) => prev * curr);
let pares = arrayNum.filter(n => n % 2 == 0);
array.push('cuatro');
//arrayNum.forEach(n => console.log(n));
// Tuple
let tuple = ['Hola', 566, true, 6.78];
// Enum
var Color;
(function (Color) {
    Color["red"] = "Rojo";
    Color["yellow"] = "Amarillo";
    Color["green"] = "Verde";
})(Color || (Color = {}));
;
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["yellow"] = 2] = "yellow";
    Color2[Color2["green"] = 3] = "green";
})(Color2 || (Color2 = {}));
;
let rojo = Color.red;
// Any
let cualquiera = 'Hola';
cualquiera = 5;
// Object
let objeto = { nombre: 'Juan', apellido: 'Pérez' };
// Estructuras de Control
if (detalle.includes('Aplicac1'))
    detalle = detalle.toUpperCase();
else if (detalle.length > 5)
    detalle = detalle.replace(/ /g, '%');
else
    detalle = detalle.toLowerCase();
for (let i in array)
    console.log(i); // posiciones
for (let i of array)
    console.log(i); // valores
;
let juan = { nombre: 'Juan', apellido: 'Pérez' };
// Funciones
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
console.log(juan);
saludar('Juan');
// POO
let persona = new poo_1.Persona('123456', 'Juan', 'Pérez', 'López', new Date('1998-11-03'), 76862782);
persona.saludar();
let estudiante = new poo_1.Estudiante('123456', 'Juan', 'Pérez', 'López', new Date('1998-11-03'), 76862782, '35-645');
estudiante.saludar();
