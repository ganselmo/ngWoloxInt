import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/modules/authentication/register/register.component';
import { AuthenticationService } from '../authentication/authentication.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private modalService: ModalService,private authService:AuthenticationService) { }
  ngOnInit(): void {
  }
  login() {
    this.modalService.openModal(RegisterComponent)
  }
  scroll(id: string) {
    let el = document.querySelector('#'+id);
    el.scrollIntoView();
  }
  logged()
  {
    return this.authService.isAuthenticated()
  }
}
