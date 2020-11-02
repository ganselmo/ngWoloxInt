import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ModalOutletComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[FooterComponent,HeaderComponent,ModalOutletComponent]

})
export class CoreModule { }
