import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

 persona = {
		nombre:'Josue',
		edad: 20
	}



  constructor() { }

  ngOnInit(): void {
  }

}
