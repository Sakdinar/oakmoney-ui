import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html'
})
export class PessoasPesquisaComponent {
  pessoas = [
    {
      codigo: 8,
      ativo: true,
      nome: 'Carlos Santana',
      endereco: {
          logradouro: 'Rua da Manga',
          numero: 433,
          bairro: 'Centro',
          cep: '31.400-12',
          cidade: 'Belo Horizonte',
          estado: 'MG'
      }
    },
    {
        codigo: 7,
        ativo: true,
        nome: 'Henrique Medeiros',
        endereco: {
            logradouro: 'Rua do Sapo',
            numero: 1120,
            bairro: 'Centro',
            cep: '12.400-12',
            cidade: 'Rio de Janeiro',
            estado: 'RJ'
        }
    },
    {
        codigo: 10,
        ativo: false,
        nome: 'Isabela Martins',
        endereco: {
            logradouro: 'Rua da Terra',
            'numero': 1233,
            'bairro': 'Vigilato',
            'cep': '99.400-12',
            'cidade': 'Manaus',
            'estado': 'AM'
        }
    },
    {
        codigo: 1,
        ativo: true,
        nome: 'João Silva Sauro',
        endereco: {
            logradouro: 'Rua das Laranjas',
            numero: 10,
            bairro: 'Brasil',
            cep: '38.400-12',
            cidade: 'Uberlândia',
            estado: 'MG'
        }
    },
    {
        codigo: 5,
        ativo: false,
        nome: 'Josué Mariano',
        endereco: {
            logradouro: 'Av Rio Branco',
            numero: 321,
            bairro: 'Jardins',
            cep: '56.400-12',
            cidade: 'Natal',
            estado: 'RN'
        }
    },
    {
        codigo: 9,
        ativo: true,
        nome: 'Leonardo Oliveira',
        endereco: {
            logradouro: 'Rua do Músico',
            numero: 566,
            bairro: 'Segismundo Pereira',
            cep: '38.400-00',
            cidade: 'Uberlândia',
            estado: 'MG'
        }
    },
    {
        codigo: 2,
        ativo: true,
        nome: 'Maria Rita',
        endereco: {
            logradouro: 'Rua do Sabiá',
            numero: 110,
            bairro: 'Colina',
            cep: '11.400-12',
            cidade: 'Ribeirão Preto',
            estado: 'SP'
        }
    },
    {
        codigo: 6,
        ativo: true,
        nome: 'Pedro Barbosa',
        endereco: {
            logradouro: 'Av Brasil',
            numero: 100,
            bairro: 'Tubalina',
            cep: '77.400-12',
            cidade: 'Porto Alegre',
            estado: 'RS'
        }
    },
    {
        codigo: 3,
        ativo: true,
        nome: 'Pedro Santos',
        endereco: {
            logradouro: 'Rua da Bateria',
            numero: 23,
            bairro: 'Morumbi',
            cep: '54.212-12',
            cidade: 'Goiânia',
            estado: 'GO'
        }
    },
    {
        codigo: 4,
        ativo: true,
        nome: 'Ricardo Pereira',
        endereco: {
            logradouro: 'Rua do Motorista',
            numero: 123,
            bairro: 'Aparecida',
            cep: '38.400-12',
            cidade: 'Salvador',
            estado: 'BA'
        }
    }
  ];
}
