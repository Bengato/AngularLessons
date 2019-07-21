import { Component, OnInit } from "@angular/core";
import { AuthorsServiceService } from "../services/authors-service.service";
@Component({
  selector: "authors", //<courses>
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.css"]
})
export class AuthorsComponent implements OnInit {
  authors;
  newAuthor = "";

  constructor(service: AuthorsServiceService) {
    this.authors = service.getAuthors();
  }
  onAdd() {
    if (this.newAuthor != "") {
      this.authors.push({ id: 4, name: this.newAuthor });
      this.newAuthor = "";
    }
  }
  onRemove(author) {
    let index = this.authors.indexOf(author);
    this.authors.splice(index, 1);
  }
  ngOnInit() {}
}
