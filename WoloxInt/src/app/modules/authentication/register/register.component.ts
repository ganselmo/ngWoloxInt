import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { TokenModel } from 'src/app/core/authentication/models/token.model';
import { UserModel } from 'src/app/core/authentication/models/user.model';
import { ModalService } from 'src/app/core/services/modal.service';
import { MustMatch } from 'src/app/shared/helpers/customValidatorsFunctions';
import { Country, Province } from 'src/app/shared/models/location.model';
import { LocationService } from 'src/app/shared/services/location.service';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private modalService: ModalService, private authService: AuthenticationService,
    private locationService: LocationService, private formBuilder: FormBuilder,
    private router: Router) {
  }
  countries: Array<Country>;
  provinces: Array<Province>;
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      country: ['', Validators.required],
      province: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10),]],
      mail: ['', Validators.email],
      password: ['', [Validators.minLength(6),Validators.required]],
      confirm_password: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirm_password')
    });


    this.countries = this.locationService.getCountries()
  }

  close():void {
    this.modalService.closeModal();
  }
  login():void  {
    this.modalService.openModal(LoginComponent)
  }

  register():void  {

    const formData = {
      name:this.registerForm.value.name,
      last_name:this.registerForm.value.last_name,
      country:this.registerForm.value.country,
      province:this.registerForm.value.province,
      mail:this.registerForm.value.mail,
      password:this.registerForm.value.password,
      phone:this.registerForm.value.phone,
    }
    if (this.registerForm.valid) {

      this.authService.register(formData).then(
        data => this.authService.setToken(data as TokenModel)
      )
      .catch(error => console.log(error)).finally(
        () => {
        this.authService.setStorageUser(formData as UserModel)
          this.router.navigate(['/technologies'])
        }

      ).then(
        () => this.modalService.closeModal()
      )
    }
  }

  changeCountry(e):void  {

    let country = this.countries.find(data => data.name === e.target.value);
    this.provinces = country.provinces;
    this.registerForm.controls.province.setValue('')

    this.registerForm.controls.country.setValue(country.name, {
      onlySelf: true
    })
  }
  changeProvince(e):void  {
    this.registerForm.controls.province.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
