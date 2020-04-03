import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imgclic',
  template: `
  <img src = "{{ imagenURL}}"/> 
  <img [src] = "imagenURL"/><br/>
  <button disabled>Mi Clic</button><br/>
  <button [disabled]="botonStatus"> Mi Clic tou</button><br/>
  <button [class.activo]="isActive"> Mi Clic three</button>
  `,

  styles: [`
  .activo{
  background:green;
  }

  `]
})
export class ImgclicComponent implements OnInit {

  imagenURL = "http://lorempixel.com/450/230";
  botonStatus=false;
  isActive = true;


  constructor() { }

  ngOnInit(): void {
  }

}
