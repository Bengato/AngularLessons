import { Component, Input } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"]
})
export class ZippyComponent {
  constructor() {}
  @Input("title") title: string;
  isExpanded: boolean = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
