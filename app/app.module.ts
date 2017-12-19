//angular
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";

//nativescript-angular
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptHttpModule } from 'nativescript-angular//http';

//services
import { ArticleService } from './blog/article/article.service';

//components
import { AppComponent } from "./app.component";

import { ArticleDetailsComponent } from './blog/article-details.component';

import { ArticlesListComponent } from './blog/articles-list.component';

//routing
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "articles", component: ArticlesListComponent },
  { path: "articles/:apiPath", component: ArticleDetailsComponent }
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleDetailsComponent
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
