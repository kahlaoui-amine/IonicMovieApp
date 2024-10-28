import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // Inscription avec email et mot de passe
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Connexion avec email et mot de passe
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Déconnexion
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  // Vérification de l'état d'authentification
  isAuthenticated() {
    return this.afAuth.authState; // Cela renvoie un Observable
  }
}
