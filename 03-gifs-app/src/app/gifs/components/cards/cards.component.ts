import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {


@Input()
public gif!: Gif;

ngOnInit(): void {
  if(!this.gif) throw new Error('Es requerido')


}

}
