import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'modal-outlet',
  templateUrl: './modal-outlet.component.html',
  styleUrls: ['./modal-outlet.component.scss']
})
export class ModalOutletComponent implements OnInit {

  component: Component;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {


    this.modalService.getModal().subscribe(data => {
      this.component = data;
    })
  }
  wheelBlock(e):void
  {
    e.preventDefault()
  }

}
