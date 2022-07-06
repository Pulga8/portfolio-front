export class Proyecto {
    id?: number;
    titulo: String;
    descripcion: String;

    constructor(titulo: String, descripcion: String) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}