import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { User, AuthResponse, RegisterUser } from '../interfaces/interfaces';
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem("Expires"));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem("Authorization");
  }

  login(user: User): Observable<any> {
    return this.http
      .post("https://api.allauto.md/api/v1/auth/token/login/", user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  register(user: RegisterUser): Observable<any> {
    return this.http
      .post("https://api.allauto.md/api/v1/auth/users/", user)
      .pipe(tap(this.getResponse), catchError(this.handleError.bind(this)));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error;
    console.log(message);
    return throwError(error);
  }

  private getResponse(response) {
    console.log(response);
  }

  private setToken(response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 36000 * 1000);
      localStorage.setItem("Authorization", "Token " + response.auth_token);
      localStorage.setItem("Expires", expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
