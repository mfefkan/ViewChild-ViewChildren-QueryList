import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  providers : [
    {provide:"ex",useValue :"3"}
  ]
})
export class Child2Component {

}
