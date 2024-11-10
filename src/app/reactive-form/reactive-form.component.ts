import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor(private formBuilder: FormBuilder) {}
  




  // profileform = new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {

  //       rua: new FormGroup(''),
  //       cidade: new FormGroup(''),
  //       estado: new FormGroup(''),
  //       cep: new FormGroup('')
  //     }

  //   )


  // });

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: [''],
    endereço: this.formBuilder.group({
      rua: [''],
      cidade: [''],
      estado: [''],
      cep: ['']
    }),

    nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });


  get apelidos(){
    return this.profileForm.get('nicknames') as FormArray
  }

        atualizarNome() {

    this.profileForm.patchValue({

      name: 'Lucas',
      cpf: '047.427.710.01',
      endereço: {
        rua: 'Perimetral',
        cidade: 'Canela',
        estado: 'Rio grande do sul',
        cep: '95680-000'
      }
    });

  }

  adicionarApelidos() {
    this.apelidos.push(this.formBuilder.control(''));
  }

      submitForm() {
    console.warn(this.profileForm.value);

     }
}






