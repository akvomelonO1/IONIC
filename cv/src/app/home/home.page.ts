import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  methods = {
    Phone: 608682989,
    Email: "eloyglezmarap@gmail.com",
    Linkedin: "www.linkedin.com/in/eloy-gonzález-posada-gil",
  };
  constructor() {
    console.log(this.methods)
  }
}
