export class Experiencia {
    id?: number;
    titulo: String;
    descripcion: String;

    constructor(titulo: String, descripcion: String) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

//INTERFAZ QUE CONECTA BASE DE DATOS CON NUESTRO FRONT, COMO TODA INTERFAZ ES UN PRECONTRATO DE TIPOS.
// Ésta es la Clase.