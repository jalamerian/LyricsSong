import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { ArticleService } from './article/article.service';
import { Article } from './article/article.model';

registerElement("CardView", () => CardView);

@Component({
  moduleId: module.id,
  selector: "articles-list",
  styleUrls: ['./articles-list.component.css'],
  templateUrl: "./articles-list.component.html"
})


export class ArticlesListComponent implements OnInit {

  title: string = "NativeScript c'est cool";
  articles: Article[];

  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this._articleService.getArticles()
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }

  addArticle(): void {
    let newArticle = {
      id: this.articles.length+1,
      title: "Wow ce cours est trop cool",
      creationDate: 1488412800000,
      likes: 0,
      dislikes: 2,
      thumbnail: "https://yt3.ggpht.com/-PAQyFHyrZmE/AAAAAAAAAAI/AAAAAAAAAAA/n0UMXjBSe-0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    };
    this._articleService.addArticle(newArticle)
      .subscribe((data: Article) => {
        this.articles.push(data);
      });
  }

  deleteArticle(id: number): void {
    this._articleService.deleteArticle(id)
    .subscribe((data: Article) => {
      this.articles = this.articles.filter( (a: Article) => {
        return a.id !== id;
      });
    });
  }
}
