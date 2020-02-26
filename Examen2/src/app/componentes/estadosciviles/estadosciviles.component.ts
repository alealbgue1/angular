import { Component, OnInit } from '@angular/core';
import { EstadocivilService } from 'src/app/servicios/estadocivil.service';
import { Estadocivil } from 'src/app/modelos/estadocivil';

@Component({
  selector: 'app-estadosciviles',
  templateUrl: './estadosciviles.component.html',
  styleUrls: ['./estadosciviles.component.css']
})
export class EstadoscivilesComponent implements OnInit {

  private arrayEC: Estadocivil;

  private numEC: number;

  constructor(private servicioEC: EstadocivilService) {}

  ngOnInit() {
    this.servicioEC.getEC().subscribe(datos=>{
      console.log(datos);
      this.arrayEC = datos;
      this.numEC = datos.length;
    });
  }


}
