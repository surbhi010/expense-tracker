import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// }),
// export class AuthGuard implements CanActivate {
//   // constructor(private authService: AuthService) { }
// }
