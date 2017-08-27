import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html'
})
export class LancamentosCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 0},
    { label: 'Despesa', value: 1}
  ];

  categorias = [
    { label: 'Alimentação', value: 1},
    { label: 'Transporte', value: 2}
  ];

  pessoas = [
    { label: 'Anderson', value: 1},
    { label: 'Allison', value: 2}
  ];

  constructor() { }

  ngOnInit() {
  }

}
