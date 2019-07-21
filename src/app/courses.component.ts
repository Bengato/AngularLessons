import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";
@Component({
  selector: "courses", //<courses>
  templateUrl: "./courses.component.html"
})
export class CoursesComponent {
  title = "List of courses";
  courses = [];
  color = "blue";
  isActive = true;
  newCourse = "";

  imageUrl = "https://bit.ly/2JDQG2L";

  onClick($event) {
    $event.stopPropagation();
    this.isActive = !this.isActive;
  }
  onKeyUp() {
    this.isActive = !this.isActive;
    this.courses.push(this.newCourse);
    this.newCourse = "";
  }
  getTitle() {
    return this.title;
  }
}
