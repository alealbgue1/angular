import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url = "http://localhost/AJAX/Servicios/servicios.php";

  constructor(private http: HttpClient) { }

  getAlumno(){
    var p = JSON.stringify({
        accion: 3
      });
  
      return this.http.post<any>(this.url, p);
  }

  getSexo(){
    var p = JSON.stringify({
      accion: 5
    });

    return this.http.post<any>(this.url, p);
  }

  addAlumno(alumno){
    var p = JSON.stringify({
      accion: 0,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL
    });

    return this.http.post<any>(this.url, p);
  }

  modAlumno(alumno){
    var p = JSON.stringify({
      accion: 1,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL,
      ID: alumno.ID
    });

    return this.http.post<any>(this.url, p);
  }

  borrarAlumno(id){
    var p = JSON.stringify({
      accion: 2,
      ID: id
    });

    return this.http.post<any>(this.url, p);
  }

  getAlumnoID(id){
    var p = JSON.stringify({
      accion: 4,
      ID: id
    });

    return this.http.post<any>(this.url, p);
  }
}
