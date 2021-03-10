import { AuthenticationService } from '../shared/authentication-service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit() {}
}
