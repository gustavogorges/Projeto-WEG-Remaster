import { Component, ElementRef, HostListener } from '@angular/core';
import { ModalService } from 'src/assets/ModalService/ModalService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private _elementRef: ElementRef, private modalService: ModalService) {
  }

  @HostListener('document:click', ['$event'])

  clickOutside(event: Event) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.largura = 0
    }
  }

  largura: number = 0 


  sideBar() {
    if (this.largura == 0) {
      if(this.screenWidth >= 768){
        this.largura = 17
      }
      else{
        this.largura = 50
      }
    } else {
      this.largura = 0
      this.modalService.closeModal()

    }
  }
  
  modalOpenClose(){
    if(this.modalService.getModalState()){
      this.modalService.closeModal()
    }else{
      this.modalService.openModal()
    }
  }

  screenWidth: number = 0;

 

  ngOnInit() {
    this.getScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.largura = 0
    this.modalService.closeModal()
    this.screenWidth = window.innerWidth;
  }
}
