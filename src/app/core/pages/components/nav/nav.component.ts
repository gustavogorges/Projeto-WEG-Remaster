import { Component, ElementRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/assets/ModalService/ModalService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private modalSubscription !: Subscription;
  constructor(private _elementRef: ElementRef, private modalService: ModalService) {}

  modalOn = false
  @HostListener('document:click', ['$event'])

  clickOutside(event: Event) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.largura = 0
      this.modalService.closeModal()
    }
  }

  largura: number = 0 

  sideBar() {
    if (this.largura == 0) {
      if(this.screenWidth >= 1280){
        this.largura = 17
      }
      else{
        this.largura = 80
      }
    }
  }

  closeSideBar(){
    this.largura = 0
    this.modalService.closeModal()
  }

  screenWidth: number = 0;

  ngOnInit() {
    this.getScreenSize()
    this.modalSubscription = this.modalService.getModalState().subscribe(state => {
      this.modalOn = state;
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.largura = 0
    this.modalService.closeModal()
    this.screenWidth = window.innerWidth;
  }
}
