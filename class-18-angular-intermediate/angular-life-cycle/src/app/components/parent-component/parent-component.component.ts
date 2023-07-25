import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  rootMessage: string = "";

  showChild: boolean = false;

  handleOnShowChild() {
    this.showChild = !this.showChild;
  }
}
