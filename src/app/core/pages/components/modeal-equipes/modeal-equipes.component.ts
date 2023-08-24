import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/assets/ModalService/ModalService';

@Component({
  selector: 'app-modeal-equipes',
  templateUrl: './modeal-equipes.component.html',
  styleUrls: ['./modeal-equipes.component.scss']
})
export class ModealEquipesComponent {
  modalOn: boolean = false

  private modalSubscription !: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.getModalState().subscribe(state => {
      this.modalOn = state;
    });
  }
}
