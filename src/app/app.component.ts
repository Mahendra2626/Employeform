import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userform';
  hideHome = false;
  constructor(private route: Router) {

  }

  ngOnInit(): void {
   
    this.route.events.subscribe((value:any) => {
      this.hideHome = this.route.url != '/';
    });

  }
}
