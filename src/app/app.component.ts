import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zoom-apps';

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(
      _ => {
        // @ts-ignore
        window.Webflow && window.Webflow.destroy();
        // @ts-ignore
        window.Webflow && window.Webflow.ready();
        // @ts-ignore
        window.Webflow && window.Webflow.require('ix2').init();
        document.dispatchEvent(new Event('readystatechange'));
      }
    )
  }
}
