import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.css']
})
export class IncrementarDecrementarComponent implements OnInit {
  numero:number;
  constructor() { this.numero = 0;}

  ngOnInit(): void {
  }

  public incrementar():void{
    this.numero++;
  }

  public decrementar():void{
    this.numero--;
  }

}
