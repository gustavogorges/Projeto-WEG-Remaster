
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

  closeModal(){
    this.modalService.closeModal()
    this.modalSubscription = this.modalService.getModalState().subscribe(state => {
      this.modalOn = state;
    });
    this.modalOn = false
  }

  modalOpen(){
    if(this.modalOn){
      this.modalService.closeModal()
    }else{
      this.modalService.openModal()
    }
  }

}
