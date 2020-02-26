import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent implements OnInit {

  private arrayAlumno: Alumno;
  private numAl: number;

  private arrayBorrar: Alumno[];
  private del: boolean;

  constructor(private servicioAlumno: AlumnoService) { 
    this.del = false;
  }

  ngOnInit() {
    this.servicioAlumno.getAlumno().subscribe(datos =>{
      console.log(datos);
      this.arrayAlumno = datos;
      this.numAl = datos.length;
    });
  }

  borrarAlumno(alumno){
    this.del = true;

    this.arrayBorrar = alumno;
    console.log(alumno);
  }

  actualizaBorrar(datos){

    if(datos){
      this.arrayAlumno = datos;
      this.numAl = datos.length;
      this.del = false;
      
    }else{
      this.del = false;
    }
    
  }

}
