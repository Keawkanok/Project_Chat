import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication-service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) {}
}
