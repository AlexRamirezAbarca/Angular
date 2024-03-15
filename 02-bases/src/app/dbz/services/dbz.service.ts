import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uudi } from "uuid";

@Injectable({ providedIn: 'root' })

export class DbzService {

  public characters: Character[] = [
    {
      id: uudi(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uudi(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uudi(),
      name: 'Vegetta',
      power: 5000
    },
    {
      id: uudi(),
      name: 'Yamcha',
      power: 800
    },
  ];

  onNewCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uudi(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }


  deleteCharacterById(id : string) : void {
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
