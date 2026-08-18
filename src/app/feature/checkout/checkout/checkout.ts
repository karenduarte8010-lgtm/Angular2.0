import { Component, computed, inject, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { CarrinhoService } from '../../../core/services/carrinho.service';

function nomeSemNumeros(
  control: AbstractControl
): ValidationErrors | null {

  const valor = control.value;

  if (!valor) {
    return null;
  }

  if (/\d/.test(valor)) {
    return { numeroInvalido: true };
  }

  return null;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  private carrinhoService = inject(CarrinhoService);

  compraFinalizada = signal(false);

  formulario = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      nomeSemNumeros
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    endereco: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  carrinhoVazio = computed(() =>
    this.carrinhoService.itens().length === 0
  );

  finalizar() {

    this.compraFinalizada.set(false);

    if (this.carrinhoVazio()) {
      console.log('Não é possível finalizar uma compra com o carrinho vazio.');
      return;
    }

    if (this.formulario.invalid) {
      console.log('Formulário inválido');
      this.formulario.markAllAsTouched();
      return;
    }

    const dados = this.formulario.value;
    const itens = this.carrinhoService.itens();

    console.log('Dados do formulário:', dados);
    console.log('Itens do carrinho:', itens);

    this.compraFinalizada.set(true);
  }
}


  
  