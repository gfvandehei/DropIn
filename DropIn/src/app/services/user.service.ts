import { Injectable } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private token: string;


  constructor(private oauth: OAuthService) {
    this.oauth.redirectUri = window.location.origin;
    this.oauth.clientId = "dropin-spa";

    this.oauth.oidc = true;

    this.oauth.setStorage(sessionStorage);
  }
}
