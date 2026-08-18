import { Component } from '@angular/core';

type ItemCarrinho = {
  nome: string;
  preco: number;
};

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  itens: ItemCarrinho[] = [];

  adicionarItem(item: ItemCarrinho) {
    this.itens.push(item);
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
  }

  limparCarrinho() {
    this.itens = [];
  }

  carrinhoVazio(): boolean {
    return this.itens.length === 0;
  }
}
