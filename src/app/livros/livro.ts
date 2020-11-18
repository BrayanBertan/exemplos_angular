import { Autor } from './autor';

export class Livro {
    titulo:string;
    autores:Autor[];
    estoque:Number;

    constructor(titulo:string,autores:Autor[] = [],estoque:Number) {
        this.titulo = titulo;
        this.autores = autores;
        this.estoque = estoque;
    }
}
