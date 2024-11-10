import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
      {id: 0, nome: 'Lucas'},
      {id: 1, nome: 'Diogo'},
      {id: 2, nome: 'Miguel'},
      {id: 3, nome: 'Vitoria'}
  ];

  getCustomers() {
    return this.customers;
      
    
  }

  getById(id: number){

    let customer = this.customers.find(c => {
       
      return c.id === id;

      
    });

    return customer;
  }
}

