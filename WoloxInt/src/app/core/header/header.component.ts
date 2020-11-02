import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/modules/authentication/login/login.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  login() {
    this.modalService.openModal(LoginComponent)
  }

}
