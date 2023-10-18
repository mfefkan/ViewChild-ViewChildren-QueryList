import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  providers : [
    {provide:"ex",useValue :true}
  ]
})
export class Child3Component {

}
