import { Component, OnInit } from '@angular/core';
import { IonContent, IonFooter, IonToolbar, IonButton, IonText } from '@ionic/angular';
import { SwiperOptions } from 'swiper'; // Import Swiper options

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  onboardingScreens = [
    { image: 'first2.jpg' },
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
    { image: '4.jpg' },
    { image: '5.jpg' },
    { image: '6.jpg' },
  ];

  swiperOptions: SwiperOptions; // Define swiperOptions property

  constructor() {
    // Initialize Swiper options in the constructor
    this.swiperOptions = {
      direction: 'vertical', // Set direction to vertical
      pagination: { clickable: true },
      keyboard: true,
      autoplay: { delay: 2 }, // Auto play with delay
    };
  }

  ngOnInit() {}

  trackByIndex(index: number): number {
    return index; // Track by index to optimize rendering
  }
}
