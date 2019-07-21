import { Component } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Social Media'},

  ]
  log(fName) {
    console.log(fName);
  }
  submit(f) {
    if (f.valid) {
      alert("Thank you for your comment," + f.value.firstName + "!");
    } else {
      alert("Invalid Form!");
    }
  }
}
