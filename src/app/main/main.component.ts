import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public mensagem: string = '';
  public produtos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mensagem = 'Bem-vindo ao meu componente!';
    this.produtos = [
      { id: 1, nome: 'Produto 1', descricao: 'Descrição do produto 1', preco: 10.99},
      { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto 2', preco: 56.99},
    ];
  }
  // Lógica do componente pode ser adicionada aqui
}
