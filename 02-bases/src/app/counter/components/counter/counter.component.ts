import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter Component</h1>
  <h3>Counter = {{counter}}</h3>

<button (click)="increaseBy(1)"> +1 </button>

<button (click)="reseat()"> Reseat Counter </button>

<button (click)="decreaseBy(1)"> -1 </button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public decreaseBy(value: number): void {
    this.counter -= value;
  }

  public reseat(): void {
    this.counter = 10;
  }

}
