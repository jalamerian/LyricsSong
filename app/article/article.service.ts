import { Article } from "./article.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';


import { isAndroid } from "tns-core-modules/platform/platform";


const ARTICLE_API_ANDROID: string = 'http://10.0.3.2:3000/articles/';
const ARTICLE_API_IOS: string = 'http://127.0.0.1:3000/articles';


@Injectable()
export class ArticleService {
  _apiUrl: string;
  constructor(private http: Http) {
    if (isAndroid) {
      this._apiUrl = ARTICLE_API_ANDROID;
    } else {
      this._apiUrl = ARTICLE_API_IOS;
    }
  }

  getArticles(): Observable<Article[]> {
    console.log(this._apiUrl);
    return this.http
    .get(this._apiUrl)
    .map( (response: Response) => {
      return response.json();
    });
  }
}
