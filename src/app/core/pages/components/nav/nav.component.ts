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
      if(this.screenWidth >= 1024){
        this.largura = 16
      }
      else{
        this.largura = 70
      }
    } else {
      this.largura = 0
    }
  }

  hovered: boolean = false

  onMouseOver() {
    this.hovered = true;
  }

  onMouseOut() {
    this.hovered = false;
  }


  screenWidth: number = 0;

 

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.sideBar()
  }
}
