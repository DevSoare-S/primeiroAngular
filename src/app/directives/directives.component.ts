import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {


  classeBotaoVerde = 'botao verde';
  classeBotaoVermelho = 'botao vermelho';
  aplicarEstiloVerde = true;
  estilosParagrafo = { 'font-size': '14px', 'font-style': 'italic' }
  nome = '';
  camposVisiveis = true;

  clientes = [
    {nome: 'Lucas'},
    {nome: 'Douglas'},
    {nome: 'Vitoria'},
    {nome: 'Nicolas'}

  ]





  aplicarEstilos() {

    this.aplicarEstiloVerde = !this.aplicarEstiloVerde;

  }

  alterarParaMaiusculo($event: string) {
    this.nome = $event.toUpperCase();
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }
}
