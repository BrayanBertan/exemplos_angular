import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  dataHoraAtual:Date;
  constructor() { 
    this.dataHoraAtual = new Date;
  }

  ngOnInit(): void {
  }

}
