import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private _elementRef: ElementRef) {
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
    }
  }


  screenWidth: number = 0;

 

  ngOnInit() {
    this.getScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.largura = 0
    this.screenWidth = window.innerWidth;
  }
}
