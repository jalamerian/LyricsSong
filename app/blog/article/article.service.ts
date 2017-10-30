import { Article } from "./article.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { isAndroid } from "tns-core-modules/platform/platform";


const ARTICLE_API_ANDROID: string = 'http://10.0.3.2:3000/articles/';
const ARTICLE_API_IOS: string = 'http://127.0.0.1:3000/articles/';


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
    return this.http
      .get(this._apiUrl)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error) => {
        return error.json();
      });
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http
      .put(this._apiUrl + article.id, article)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error) => {
        return error.json();
      });
  }

  deleteArticle(articleId: number): Observable<Article> {
    return this.http
      .delete(this._apiUrl + articleId)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error) => {
        return error.json();
      });
  }

  addArticle(article: Article): Observable<Article> {
    return this.http
      .post(this._apiUrl, article)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error) => {
        return error.json();
      });
  }
}
