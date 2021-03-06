import { Component, OnInit } from '@angular/core';
import { Autor } from './autor';
import { Livro } from './livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros:Livro[];
  
  constructor() {
    this.livros = [
      new Livro("Teste 1" ,[new Autor("A","B")],3),
      new Livro("Teste 2" ,[new Autor("C","D"),new Autor("E","F")],1),
      new Livro("Teste 3" ,[new Autor("G","H")],0),
    ]
   }

  ngOnInit(): void {
  }

}
