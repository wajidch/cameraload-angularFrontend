import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showHeader = false;

  
  constructor(private router: Router,) {

  
  }

  ngOnInit() {
   

 // this.fcm.getPermission();
 // this.fcm.receiveMessage();
 // this.message = this.fcm.currentMessage;
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.url === '/' || route.url === '/signup') {
          this.showHeader = false;

        } else {
          this.showHeader = true;
        }
      }
    });
  }

}
