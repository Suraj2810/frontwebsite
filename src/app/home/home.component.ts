import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  }
   scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth' // For smooth scrolling animation
    });
  }
}
