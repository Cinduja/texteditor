import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('editor') el:ElementRef;

  constructor(private element:ElementRef,private renderer:Renderer2)
  {
    let el=this.element.nativeElement;
  }
   formatDoc(sCmd, sValue) {
    
   this.renderer.setStyle(this.el.nativeElement,sCmd,sValue);
     
  }
}

