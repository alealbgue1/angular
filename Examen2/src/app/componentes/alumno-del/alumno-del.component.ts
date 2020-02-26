import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno-del',
  templateUrl: './alumno-del.component.html',
  styleUrls: ['./alumno-del.component.css']
})
export class AlumnoDelComponent implements OnInit {

  @Input() alumnosDel: Alumno;

  @Output() eliminado = new EventEmitter();

  constructor(private servicioAlumno: AlumnoService, private route: ActivatedRoute, private ruta: Router) { }

  ngOnInit() {
  }

  borrar(){
    console.log(this.alumnosDel.ID)
    this.servicioAlumno.borrarAlumno(this.alumnosDel.ID).subscribe(datos =>{
      this.eliminado.emit(datos);

    });
  }

  cancelar(){
    this.eliminado.emit();
  }

}
