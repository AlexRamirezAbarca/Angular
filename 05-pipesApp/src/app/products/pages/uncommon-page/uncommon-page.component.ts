import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia'];

  deleteClient(): void {
    this.clients.shift();
  }

  public clientsMap = {
    '=0' : 'no tenemos ninguún cliente esperando.',
    '=1' : 'tenemos 1 cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  //KeyValuePipe
  public person = {
    name: 'Alex',
    age: 24,
    address : 'Malaga 2'
  }

  //AsyncPipe
  public myObservableTimer = interval(2000);

  public promisseValue : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })

}
