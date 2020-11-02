import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal:BehaviorSubject<any> =  new BehaviorSubject<any>(null);

  constructor() { }

  openModal(component)
  {

    this.modal.next(component)
  }
  getModal(){
    return this.modal
  }

  closeModal()
  {
    this.modal.next(null)
  }

}
