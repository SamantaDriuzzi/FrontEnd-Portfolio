export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  img: String;
  sobre_mi: String;
  titulo: String;

  constructor(
    nombre: String,
    apellido: String,
    img: String,
    sobre_mi: String,
    titulo: String
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.sobre_mi = sobre_mi;
    this.titulo = titulo;
  }
}
