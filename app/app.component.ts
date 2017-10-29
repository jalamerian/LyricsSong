import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';


registerElement("CardView", () => CardView);

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <ActionBar title="{{ title + ' :)'}}" class="action-bar"> </ActionBar>
  `
})

export class AppComponent {
  title: string = "NativeScript c'est de la frappe";
}
