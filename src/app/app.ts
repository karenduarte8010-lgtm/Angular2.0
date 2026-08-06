import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produto } from './features/produtos/produto/produto';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';



@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-app');
}
