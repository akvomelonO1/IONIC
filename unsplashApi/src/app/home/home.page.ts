import { ApiCallsService } from "./../api_calls/api-calls.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private ApiCallsService: ApiCallsService) {}
  itemImage;
  onHover = false;

  ngOnInit() {
    this.ApiCallsService.getImage().subscribe((resp: any) => {
      this.itemImage = resp;
      console.log(resp);
    });
  }
  showLikes() {
    this.onHover = true;
  }
  hideLikes() {
    this.onHover = false;
  }
  //To know the exact point of cursor
  mousePointer(e) {
    e = e || window.event;
    let pageX = e.pageX;
    let pageY = e.pageY;
    // IE 8
    if (pageX === undefined) {
      pageX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      pageY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    console.log(pageX, pageY);
    /* document.getElementById("likeBubble").style.transform ="translateY(pageY)";
    document.getElementById("likeBubble").style.transform ="translatex(pageX)";
    document.getElementById("likeBubble").style.width= "60px "*/
  }
}
