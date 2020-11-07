import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RegisterComponent } from 'src/app/modules/authentication/register/register.component';
import { TechService } from 'src/app/modules/tech/services/tech.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private modalService: ModalService,
    private authService: AuthenticationService,
    private router: Router,
    private techService:TechService) { }
  ngOnInit(): void {
  }
  login(): void {
    this.modalService.openModal(RegisterComponent)
  }
  scroll(id: string) {
    let el = document.querySelector('#' + id);
    el.scrollIntoView();
  }
  islogged() :boolean {
    return this.authService.isAuthenticated()
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['landing']);
  }
  getFavorites():BehaviorSubject<number>
  {
    return this.techService.getLikedTechsCount()
  }
}
