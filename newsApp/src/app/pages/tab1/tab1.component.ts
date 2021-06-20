import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from './../../services/get-noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component implements OnInit {
  constructor(private GetNoticiasService: GetNoticiasService) {}

  ngOnInit() {
    this.GetNoticiasService.getTopHeadlines().subscribe((resp) =>
      console.log(resp)
    );
  }
}
