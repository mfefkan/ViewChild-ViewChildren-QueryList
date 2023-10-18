import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { ExampleDirective } from './directives/example.directive';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone : true,
  template: `
  
  <h1 #h appExample >App Component</h1>
  
  
<app-child1 #h></app-child1> <br>
<app-child2 #h></app-child2> <br>
<app-child3 #h></app-child3> <br>

  <p #p> A </p>
  <p #p *ngIf="visible"> B </p>
  <p #p *ngIf="!visible"> C </p>

  <button (click)="showHide()">Show/Hide</button>
  `,
  imports : [Child1Component,Child2Component,Child3Component,NgIf]
})
export class AppComponent {
visible : boolean = true;

showHide(){
  this.visible = !this.visible;
}

@ViewChildren("p") list : QueryList<ElementRef>;

  @ViewChild("h") _h: ElementRef;
  @ViewChild("h",{read:ElementRef}) _h2: ElementRef;
  @ViewChild("h",{read:ExampleDirective}) _h3: ExampleDirective;

    @ViewChild(Child1Component,{static: true}) _child1Component : Child1Component 
    @ViewChild(Child1Component,{static: true,read :"ex"}) _ex : string;


@ViewChildren("h") _list : QueryList<ElementRef | Child1Component>


@ViewChildren("h", {read: "ex"}) _list1 : QueryList<string | boolean | number>



 ngOnInit() {
  // console.log(this._child1Component + 'ngOnInit ile geldi çünkü static:true');
  // console.log(this._ex);
  
  
  
 }

 //Burada static prop'u ile bu nesnenin sayfanın initialize edildiğinden beri mi yoksa edildikten sonra bir koşul doğrultusunda mı verileceğine karar verilir.

 //Viewchild ile referans edilen (#h gibi) html nesneleri varsa bu nesneler arasında ilk işaretlenen hangisi ise viewchild onu görecektir....(Multiple Instance)

 //ViewChild - Read Option bir html nesnesi birden fazla türle ilişkilendirilecek şekilde işaretlendiği taktirde

 //ViewChildren kullandığımızda bize sonuç bir QueryList olarak dönüyor bu querylistin tipini alacağımız veriye göre düzenliyoruz...
 ngAfterViewInit(){
  // console.log(this._h);
  // console.log(this._child1Component + ' ngAfterViewInit ile geldi. hertürlü gelir bu zaten');
  // this._child1Component.x();
  console.log(this._list);
  console.log(this._list1);
  this.list.changes.subscribe({
    next : data => console.log(data)

    //Böylelikle bu değişimi gözlemleyebiliriz...
    
  })
 }


}

