import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters : Character[] = [
    {
    name : 'Krillin',
    power : 1000
    },
    {
    name : 'Goku',
    power : 10000
    },
    {
    name : 'Vegetta',
    power : 5000
    },
    {
    name : 'Yamcha',
    power : 800
    },
];

onNewCharacter(character : Character):void {
  console.log('Main page');
  console.log(character);
}
}
