import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"]
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  id: number;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
      console.log(this.id);
    });
  }
  submit() {
    this.router.navigate(["/followers"], {
      queryParams: { page: 1, order: "newest" }
    });
  }
}
