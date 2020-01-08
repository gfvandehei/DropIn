import { Injectable } from '@angular/core';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
}
