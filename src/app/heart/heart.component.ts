import { Component, Input } from "@angular/core";

@Component({
  selector: "app-heart",
  templateUrl: "./heart.component.html",
  styleUrls: ["./heart.component.css"]
})
export class HeartComponent {
  @Input("likesCount") likesCount: number;
  @Input("isActive") isActive: boolean;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
