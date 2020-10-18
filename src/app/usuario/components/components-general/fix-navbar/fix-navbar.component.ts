import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { faHome, faClock, faPlus, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fix-navbar',
  templateUrl: './fix-navbar.component.html',
  styleUrls: ['./fix-navbar.component.css']
})
export class FixNavbarComponent implements OnInit {
  faHome = faHome;
  faClock = faClock;
  faPlus = faPlus;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor(private authSvc: FireauthService, private router:Router) { }

  ngOnInit(): void {
  }
  signOut(){
    this.authSvc.logOut().then(()=>{this.router.navigate(['/'])});
  }

}
