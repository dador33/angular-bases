import { Component } from "@angular/core";

@Component({
  selector :'app-counter',
  template:`
  <h1>counter {{counter}}</h1>

<button (click)="increaseby(1)"  >+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseby(-1)">-1</button>


  `,

})
export class CounterComponent{

public counter:number = 14;

increaseby(minus:number):void
{
this.counter+=minus;
}

reset():void
{
this.counter=14;
}

}
