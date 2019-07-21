import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorsServiceService {
  authors = [
    { id: 1, name: "J.K Rowling" },
    { id: 2, name: "George R.R Martin" },
    { id: 3, name: "J.R.R Tolkein" }
  ];

  getAuthors() {
    return this.authors;
  }
}
