import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { ArticleService } from './article/article.service';


@Component({
  selector: "article-details",
  moduleId: module.id,
  templateUrl: "./article-details.component.html"
})
export class ArticleDetailsComponent implements OnInit{ 

  apiPath: string;
  songDetails: any;

  constructor(private _articleService: ArticleService, private pageRoute: PageRoute) {
    // use switchMap to get the latest activatedRoute instance
    
  }

  ngOnInit() {
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.params)
    .forEach((params) => { 
      this.apiPath = params["apiPath"]; 
      this._articleService.getSongDetails(this.apiPath)
        .subscribe((data) => {
          this.songDetails = data.response; // les donnees de la chanson stockées dans la variable
          console.log(JSON.stringify(this.songDetails.dom.tag));
        })
    });
  }
}
