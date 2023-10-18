import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  providers : [
    {provide:"ex",useValue :"merhaba"}
  ]
})
export class Child1Component {
x(){
  console.log("Child1 X function");
}



}
