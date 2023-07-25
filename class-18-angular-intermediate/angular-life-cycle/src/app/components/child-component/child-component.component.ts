import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message: string = "";
  constructor(){
    console.log("constructor");
  }

  ngOnInit(){
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
