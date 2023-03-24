// console.log('Hola Mundo!!!');
/* Esto es un comentario
  en varias líneas
 */
// Tipos de Datos

import { Estudiante, Persona } from "./poo";

// Boolean
let esActivo: boolean = true; // El ámbito es sólo en la función o bloque
var esActivo2: boolean = false; // El ámbito es global en todo el archivo
const esActivo3: boolean = false; // Constante, no se debe modificar

// Number
let entero: number = 5;
let real: number = 7.23;
let binario: number = 0b100;
let octal: number = 0o11;
let hexadecimal: number = 0xB;
let enteroLargo: bigint = 95654635654654n;

// String
let sigla: string = 'SIS257';
let detalle: string = `Desarrollo de Aplicación Int/Internet II`;
let concatenado: string = sigla + ' - ' + detalle;
let concatenado2: string = `${sigla} - ${detalle}`;
let longitud: number = sigla.length;
let mayusculas: string = detalle.toUpperCase();
let minusculas: string = detalle.toLowerCase();
let reemplazo: string = detalle.replace(/ /g, '*');
let subcadena: string = detalle.substring(0, 8);
let separar: string[] = detalle.split(' ');

// Array
let array: string[] = ['uno', 'dos', 'tres'];
let arrayNum: number[] = [1, 2, 3, 4];
let arraySize: number = array.length;
let doble: number[] = arrayNum.map(n => n * 2);
let factorial: number = arrayNum.reduce((prev, curr) => prev * curr);
let pares: number[] = arrayNum.filter(n => n % 2 == 0);
array.push('cuatro');
//arrayNum.forEach(n => console.log(n));

// Tuple
let tuple = ['Hola', 566, true, 6.78];

// Enum
enum Color { red = 'Rojo', yellow = 'Amarillo', green = 'Verde' };
enum Color2 { red = 1, yellow = 2, green = 3 };
let rojo: Color = Color.red;

// Any
let cualquiera: any = 'Hola';
cualquiera = 5;

// Object
let objeto: Object = { nombre: 'Juan', apellido: 'Pérez' };


// Estructuras de Control
if (detalle.includes('Aplicac1')) detalle = detalle.toUpperCase();
else if (detalle.length > 5) detalle = detalle.replace(/ /g, '%');
else detalle = detalle.toLowerCase();

for(let i in array) console.log(i); // posiciones
for(let i of array) console.log(i); // valores

// Interfaces
interface Persona { nombre: string, apellido: string };
let juan: Persona = { nombre: 'Juan', apellido: 'Pérez' };

// Funciones
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}

console.log(juan);
saludar('Juan');

// POO
let persona = new Persona('123456', 'Juan', 'Pérez', 'López', 
  new Date('1998-11-03'), 76862782);
persona.saludar();

let estudiante = new Estudiante('123456', 'Juan', 'Pérez', 'López', 
new Date('1998-11-03'), 76862782, '35-645');
estudiante.saludar();
