import { Component } from "@angular/core";

@Component({
  selector: "searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent  {
  constructor() {}

  search="";
  movies=[
    {id:1,name:"Lord of the Rings"},
    {id:2,name:"Rise of the Planet of the Apes"},
    {id:3,name:"Harry Potter"},
    {id:4,name:"Jumanji"},
    {id:5,name:"Pokemon"},
    {id:6,name:"Superman"},
    {id:7,name:"Spiderman"},
    {id:8,name:"The Hulk"},
    {id:9,name:"Captain America"},
  ];
}
