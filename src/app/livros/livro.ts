import { Autor } from './autor';

export class Livro {
    titulo:string;
    autores:Autor[];

    constructor(titulo:string,autores:Autor[] = []) {
        this.titulo = titulo;
        this.autores = autores;
    }
}
