import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';

registerElement("CardView", () => CardView);

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <ActionBar title="{{ title + ' :)'}}" class="action-bar"> </ActionBar>
    <GridLayout rows="auto, *" columns="*">
      <Label row="0" col="0" class="p-10 text-center" text="Nombre d'articles: {{articles?.length}}"></Label>
      <ScrollView row="1" col="1">
        <StackLayout>
          <StackLayout *ngFor="let article of articles; let i = index;">
            <CardView class="cardStyle" height="auto" width="90%" margin="10"
            elevation="20" radius="10"
            ios:shadowColor="#CCCCCC"
            ios:shadowOpacity="7">
                <GridLayout rows="auto, auto, auto, auto, auto" columns="*">
                  <Image row="0" [src]="article.thumbnail"></Image>
                  <Label row="1" col="0" class="p-10" text="N°: {{i}}" textWrap="true"></Label>
                  <Label row="2" col="0" class="p-10"  text="Title: {{article.title}}" textWrap="true"></Label>
                  <Label row="3" col="0"  class="p-10" text="Created at: {{article.creationDate}}" textWrap="true"></Label>
                  <GridLayout row="4" col="0" rows="auto" columns="auto, auto, auto" class="p-10">
                    <Label row="0" col="0" text="Likes: {{article.likes}}" textWrap="true"></Label>
                    <Label row="0" col="1" class="p-l-10" text="Dislikes: {{article.dislikes}}" textWrap="true"></Label>
                    <Label class="m-l-10 status"
                      [ngClass]="{'good': article.likes > article.dislikes, 'bad': article.dislikes >= article.likes }"
                      row="0" col="2" text="" textWrap="true"></Label>
                  </GridLayout>
                </GridLayout>
            </CardView>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  `
})
export class AppComponent {
  title: string = "NativeScript c'est cool";
  articles = [
    {
      id: 1,
      title: "Comment créer une application Angular",
      creationDate: 1488412800000,
      likes: 12,
      dislikes: 2,
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2000px-Angular_full_color_logo.svg.png"
    },
    {
      id: 2,
      title: "Wow ce cours est trop cool",
      creationDate: 1488412800000,
      likes: 0,
      dislikes: 2,
      thumbnail: "https://yt3.ggpht.com/-PAQyFHyrZmE/AAAAAAAAAAI/AAAAAAAAAAA/n0UMXjBSe-0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    },
    {
      id: 3,
      title: "Hâte de tater NativeScript",
      creationDate: 1488412800000,
      likes: 246,
      dislikes: 32,
      thumbnail: "https://cms-assets.tutsplus.com/uploads/users/48/posts/28664/preview_image/ns-1.png"
    },
    {
      id: 4,
      title: "Pourquoi 42 est la réponse à la vie?",
      creationDate: 1488412800000,
      likes: 42,
      dislikes: 12,
      thumbnail: "https://1.bp.blogspot.com/-FdUyYlvUdWA/WN6jJ-ie8dI/AAAAAAAAVQw/rjGwJM92CGEJ8hsXexZ4duoVGSQf_fiPQCLcB/s1600/42-1.jpg"
    },
    {
      id: 5,
      title: "Blablabla (manque d'inspiration)",
      creationDate: 1488412800000,
      likes: 56,
      dislikes: 1234,
      thumbnail: "https://i.skyrock.net/2634/20402634/pics/752043517.jpg"
    }
  ];

  loop () {

    let article;
    for (var i = 0; i < this.articles.length; i++) {
      article = this.articles[i];
    }


  }
}
