import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private storageSub= new Subject<boolean>();

  constructor() { }

  setAccessToken(token: string): void {
    this.storageSub.next(true);
    localStorage.setItem('jwt', token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('jwt');
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  clearAccessToken(): void {
    localStorage.removeItem('jwt');
  }

  // Calule et retourne le temps restant avant expiration du token en secondes
  calculateTokenExpirationTime(): number {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      const payload = JSON.parse(atob(accessToken.split('.')[1]));
      const expirationTime = payload.exp * 1000;
      const currentTime = Date.now();
      return Math.max(0, Math.floor((expirationTime - currentTime) / 1000));
    }
    return 0; // Retourne 0 s'il n'y a pas de token
  }

  /**
   * fonction qui envoie la durée de validité du token en couurs et qui trasnmet un booléen pour savoir si le token doit être rafraichît
   */
  // checkCountdown(tokenDurationInSeconds: number, shouldRefreshToken: boolean) {
  //   if (tokenDurationInSeconds) {
  //     this.startCountDown(tokenDurationInSeconds, shouldRefreshToken);
  //     this.setTokenDuration(tokenDurationInSeconds);
  //   }
  // }
}
