import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  estilizarTitulo = true;
  message = 'Meu primeiro data-binding';
  imagePath = 'assets/@renato.png.webp';
  imageWidth = "300px"
  isDisable = false;
 // botaoClass = 'botao verde';
 // ou
  //botaoClass = ['botao', 'verde'];
  // ou
  botaoClass = {botao: true, verde: false};
  ariaLabel = 'Fechar';

  // botaoFechar = `
  
  //    border: 1px solid;
  //    border-radius: 45px;
  //    padding: 5px;
  //    width: 30px;
  //    height: 30px;
  //    display: flex;
  //    justify-content: center;
  //    align-items: center; 
  // `;

  //ou 


  botaoFechar = {

    border: '1px solid',
    'border-radius': '45px',
     padding: '5px',
     width: '30px',
     height: '30px',
     display: 'flex',
     'justify-content': 'center',
     'align-items': 'center'
  }


  nomeCliente = '';

  enableCloseButton(){
    this.isDisable = !this.isDisable;
  }

  aplicarEstiloTitulo() {

     this.estilizarTitulo = !this.estilizarTitulo;

     this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde
     }
  }
  
}
