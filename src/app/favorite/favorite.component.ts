import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  constructor() {}
  @Input("is-favorite") isFavorite: boolean;
  @Output("on-click") change = new EventEmitter();
  onFavClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
  ngOnInit() {}
}
