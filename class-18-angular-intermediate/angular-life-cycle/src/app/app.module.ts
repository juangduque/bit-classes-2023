import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { SiblingComponent } from './components/sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SiblingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
