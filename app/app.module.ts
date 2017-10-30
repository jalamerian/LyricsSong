import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";


import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NSModuleFactoryLoader } from "nativescript-angular/router";

import {NativeScriptFormsModule } from 'nativescript-angular/forms';

//services
import { ArticleService } from './article/article.service';

//components
import { AppComponent } from "./app.component";



@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
    ArticleService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
