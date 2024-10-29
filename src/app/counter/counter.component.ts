import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h1>Counter: {{counter}}</h1>
    <p> Bienvenido a angular</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>`,
  })
export class CounterComponent {
    public counter: number = 10;

    increaseBy( value:number): void {
      this.counter = this.counter + value;
    }
    reset() {
      this.counter = 10;
      }
}