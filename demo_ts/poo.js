"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    constructor(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular) {
        this.cedulaIdentidad = cedulaIdentidad;
        this.nombres = nombres;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.celular = celular;
    }
    saludar() {
        console.log(`Hola ${this.nombres} ${this.primerApellido}.`);
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    constructor(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular, carnetUniversitario) {
        super(cedulaIdentidad, nombres, primerApellido, segundoApellido, fechaNacimiento, celular);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        console.log(`Soy el estudiante ${this.nombres} con C.U. ${this.carnetUniversitario}`);
    }
}
exports.Estudiante = Estudiante;
