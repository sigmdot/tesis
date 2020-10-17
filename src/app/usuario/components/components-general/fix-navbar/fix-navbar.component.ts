import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
