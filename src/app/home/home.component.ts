import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title: string;
  post = {
    title: "Title",
    isFavorite: false
  };

  viewMode = "";
  changeViewMode(linkName) {
    this.viewMode = linkName;
  }
  tweet = {
    body: "a body",
    isLiked: true,
    likesCount: 10
  };

  onFavoriteChanged(isFavorite) {
    alert(isFavorite ? "Liked!" : "Unliked!");
  }
}
