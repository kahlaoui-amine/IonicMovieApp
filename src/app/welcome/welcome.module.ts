import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [WelcomePage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: WelcomePage }]),
    SwiperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class WelcomePageModule {}
