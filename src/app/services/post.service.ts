import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInput());
        }
        return Observable.throw(new AppError());
      })
    );
  }
  updatePost(post) {
    return this.http.patch(
      this.url + "/" + post.id,
      JSON.stringify({ isRead: true })
    );
  }
  deletePost(id) {
    return this.http.delete(this.url + "/" + id).pipe(
      catchError((error: Response) => {
        if (error.status === 404) return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError());
      })
    );
  }
}
