export class Persona {
  constructor(
    public cedulaIdentidad: string,
    public nombres: string,
    public primerApellido: string,
    public segundoApellido: string,
    public fechaNacimiento: Date,
    public celular: number
  ) { }

  saludar():void {
    console.log(`Hola ${this.nombres} ${this.primerApellido}.`);
  }
}

export class Estudiante extends Persona {
  carnetUniversitario: string;
  constructor(
    cedulaIdentidad: string,
    nombres: string,
    primerApellido: string,
    segundoApellido: string,
    fechaNacimiento: Date,
    celular: number,
    carnetUniversitario: string) {
      super(cedulaIdentidad, nombres, primerApellido, 
        segundoApellido, fechaNacimiento, celular);
      this.carnetUniversitario = carnetUniversitario;
    }

  saludar(): void {
    console.log(`Soy el estudiante ${this.nombres} con C.U. ${this.carnetUniversitario}`);
  }
}