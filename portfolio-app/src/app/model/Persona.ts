export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    about: String;
    img_perfil: String;
    img_portada: String;

    constructor(nombre: String, apellido: String, profesion: String, about: String, img_perfil: String, img_portada: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.about = about;
        this.img_perfil = img_perfil;
        this.img_portada = img_portada;
    }
}