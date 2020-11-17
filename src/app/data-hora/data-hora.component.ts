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
    this.updateDataHora();
    setInterval(
      () => this.updateDataHora(),
      1000
    );
  }

  ngOnInit(): void {
    this.updateDataHora();
    setInterval(
      () => this.updateDataHora(),
      1000
    );
  }

  updateDataHora() {
    this.dataHoraAtual = new Date;
  }
}
