import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  openModal(component): void {

    this.modal.next(component)
  }
  getModal(): BehaviorSubject<any> {
    return this.modal
  }

  closeModal(): void {
    this.modal.next(null)
  }

}
