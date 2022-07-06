export class Skill {
    id?: number;
    titulo: String;
    progreso: number;

    constructor(titulo: String, progreso: number) {
        this.titulo = titulo;
        this.progreso = progreso;
    }
}