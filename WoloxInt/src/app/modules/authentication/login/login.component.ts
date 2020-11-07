import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { TokenModel } from 'src/app/core/authentication/models/token.model';
import { ModalService } from 'src/app/core/services/modal.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm:FormGroup;
  constructor(private modalService: ModalService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('',Validators.required),
    });
  }

  close():void {
    this.modalService.closeModal();
  }
  register():void {
    this.modalService.openModal(RegisterComponent)
  }

  login():void {
    if(this.profileForm.valid)
    {
      this.authService.login(this.profileForm.value).then(
        data => this.authService.setToken(data as TokenModel)
      ).catch(error => console.log(error))
    }
    else{

    }

  }
}
