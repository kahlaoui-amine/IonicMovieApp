import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  async login() {
    if (this.isFormInvalid()) {
      return;
    }

    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.error('Erreur de connexion', error);
      this.errorMessage = 'Login failed. Please check your credentials.';
    }
  }

  isFormInvalid(): boolean {
    if (!this.email || !this.password) {
      this.errorMessage = 'Both email and password are required.';
      return true;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email format.';
      return true;
    }
    return false;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  goBack() {
    this.location.back();
  }
}
