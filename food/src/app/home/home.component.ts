import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  
  onImageClick() {
    console.log('Image clicked! Navigating to "products"...');
    this.router.navigate(['products']);
  }
}
