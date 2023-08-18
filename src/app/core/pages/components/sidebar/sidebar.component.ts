import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.largura = 0
    }
  }

  largura: number = 0

    sideBar(){
      if(this.largura == 0){
        this.largura = 15
      }else{
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
  }

