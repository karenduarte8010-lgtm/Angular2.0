import { Injectable, computed, signal } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {

  // Estado interno privado.
  private carrinho = signal<ItemCarrinho[]>([]);

  // Selectors públicos derivados do estado interno.
  itens = computed(() => this.carrinho());

  quantidade = computed(() => this.carrinho().length);

  total = computed(() =>
    this.carrinho().reduce((total, item) => total + item.preco, 0)
  );

  carrinhoVazio = computed(() => this.carrinho().length === 0);

  // Adiciona um produto ao carrinho.
  adicionar(produto: ItemCarrinho) {
    this.carrinho.update((listaAtual) => [
      ...listaAtual,
      produto
    ]);
  }

  // Remove um item pelo índice.
  removerPorIndice(indice: number) {
    this.carrinho.update((listaAtual) =>
      listaAtual.filter((_, index) => index !== indice)
    );
  }

  // Limpa todos os itens.
  limpar() {
    this.carrinho.set([]);
  }
}