import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.service.createPost(post).subscribe(
      response => {
        post["id"] = response.json().id;
        this.posts.unshift(post);
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          console.log(error);
        }
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
    input.value = "";
  }

  updatePost(post) {
    this.service.updatePost(post.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("Post already deleted.");
        } else {
          alert("An unexpected error occured.");
          console.log(error);
        }
      }
    );
  }
}
