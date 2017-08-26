import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  estados = [{
    'value': '1',
    'label': 'AC'
  },
       {
    'value': '2',
    'label': 'AL'
  },
       {
    'value': '3',
    'label': 'AM'
  },
       {
    'value': '4',
    'label': 'AP'
  },
       {
    'value': '5',
    'label': 'BA'
  },
       {
    'value': '6',
    'label': 'CE'
  },
       {
    'value': '7',
    'label': 'DF'
  },
       {
    'value': '8',
    'label': 'ES'
  },
       {
    'value': '9',
    'label': 'GO'
  },
       {
    'value': '10',
    'label': 'MA'
  },
       {
    'value': '11',
    'label': 'MG'
  },
       {
    'value': '12',
    'label': 'MS'
  },
       {
    'value': '13',
    'label': 'MT'
  },
       {
    'value': '14',
    'label': 'PA'
  },
       {
    'value': '15',
    'label': 'PB'
  },
       {
    'value': '16',
    'label': 'PE'
  },
       {
    'value': '17',
    'label': 'PI'
  },
       {
    'value': '18',
    'label': 'PR'
  },
       {
    'value': '19',
    'label': 'RJ'
  },
       {
    'value': '20',
    'label': 'RN'
  },
       {
    'value': '21',
    'label': 'RO'
  },
       {
    'value': '22',
    'label': 'RR'
  },
       {
    'value': '23',
    'label': 'RS'
  },
       {
    'value': '24',
    'label': 'SC'
  },
       {
    'value': '25',
    'label': 'SE'
  },
       {
    'value': '26',
    'label': 'SP'
  },
       {
    'value': '27',
    'label': 'TO'
  }];

  constructor() { }

  ngOnInit() {
  }

}
