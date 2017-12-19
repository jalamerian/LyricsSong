import { Article } from "./article.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { isAndroid } from "tns-core-modules/platform/platform";

const API_URL: string = "https://api.genius.com"
const SEARCH_URL: string = API_URL+ "/search?q=";

@Injectable()
export class ArticleService {
  constructor(private http: Http) {
  }

  getArticles(query: string): Observable<Article[]> {
    let headers = new Headers({'Authorization':'Bearer 25weietjB27mZEqKPVDwtJfj57kMK_eM525S-AK8AM2F7iCZKUoz8bJULAWHifd5'}); // access token a modifier si couille
    let options = new RequestOptions({headers: headers});
    return this.http
      .get(SEARCH_URL + query, options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(JSON.stringify(error.json()));
        return error.json();
      });
  }

  getSongDetails(apiPath: string): Observable<any> {
    let headers = new Headers({'Authorization':'Bearer 25weietjB27mZEqKPVDwtJfj57kMK_eM525S-AK8AM2F7iCZKUoz8bJULAWHifd5'}); // access token a modifier si couille
    let options = new RequestOptions({headers: headers});
    return this.http
      .get(API_URL + apiPath + "?text_format=plain", options)
      .map((response: Response) => {
        console.log(JSON.stringify(response.json()));
        return response.json();
      })
      .catch((error) => {
        console.log(JSON.stringify(error.json()));
        return error.json();
      });
  }

  // updateArticle(article: Article): Observable<Article> {
  //   return this.http
  //     .put(this._apiUrl + article.id, article)
  //     .map((response: Response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       return error.json();
  //     });
  // }

  // deleteArticle(articleId: number): Observable<Article> {
  //   return this.http
  //     .delete(this._apiUrl + articleId)
  //     .map((response: Response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       return error.json();
  //     });
  // }

  // addArticle(article: Article): Observable<Article> {
  //   return this.http
  //     .post(this._apiUrl, article)
  //     .map((response: Response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       return error.json();
  //     });
  // }
}
