import { Component, OnInit } from "@angular/core";
import { FollowersService } from "../services/followers.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.css"]
})
export class FollowersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
  ) {}
  followers = [];
  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap(combined => {
          let id = combined[0].get("id");
          combined[1].get("page");
          return this.service.getAll();
        })
      )
      .subscribe(followers => {
        this.followers = followers;
      });
  }
}
