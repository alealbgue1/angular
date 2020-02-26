import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { Estadocivil } from 'src/app/modelos/estadocivil';
import { EstadocivilService } from 'src/app/servicios/estadocivil.service';
import { EstadoscivilesComponent } from '../estadosciviles/estadosciviles.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  private arraySexo: Array<Estadocivil>;
  private arrayEC: Array<Estadocivil>;

  private idGlobal: number;
  private alumno: Alumno;
  private textoBoton: string;

  constructor(private servicioAlumno: AlumnoService, private servicioEC: EstadocivilService, private route: ActivatedRoute, private ruta: Router) {
    this.alumno = <Alumno>{};
   }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    console.log(id);

    this.idGlobal = id;

    this.servicioAlumno.getSexo().subscribe(datos=>{
      console.log(datos);
      this.arraySexo = datos;
    });

    this.servicioEC.getEC().subscribe(datos =>{
      console.log(datos);
      this.arrayEC = datos;
    })

  
    if(id == -1){
      
      this.textoBoton = "AÑADIR";

    }else{

      this.servicioAlumno.getAlumnoID(id).subscribe(datos =>{
        console.log(datos);
        this.alumno = datos;
      })

      this.textoBoton = "MODIFICAR";
    }
  }

  anadeOrMod(alumnos){
    this.alumno = alumnos;
    this.alumno.ID = this.idGlobal;
    console.log("alumno", this.alumno)
    if(this.idGlobal == -1){
      this.servicioAlumno.addAlumno(this.alumno).subscribe(datos =>{
      
      });
    }else{
      this.servicioAlumno.modAlumno(this.alumno).subscribe(datos =>{

      });
    }
    
    this.ruta.navigate(['alumnos']);
  }

}
