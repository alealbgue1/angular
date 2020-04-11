import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-investigador-anade',
  templateUrl: './investigador-anade.component.html',
  styleUrls: ['./investigador-anade.component.css']
})
export class InvestigadorAnadeComponent implements OnInit {

  private inv: any;

  private idInv: number;

  private texto: string;

  constructor(private servicioInv: InvestigadorService, private servicioUpdateMenu: UpdateMenuService, 
    private ruta: Router, private servicioLogin: LoginService, private route: ActivatedRoute) {
      this.inv = {
        id: -1,
        nombre:"",
        apellidos:"",
        email:"",
        clave:"",
        clave2:""
      }
    }

  ngOnInit() {
    //  Con esto evitamos que intente añadir uno nuevo (sin haber hecho login) poniendo la dirección en la url,
		//  Validamos el JWT que pudiera haber en localhost:
		if ((!localStorage.JWT) || ((localStorage.JWT.split(".").length != 3))) {
			//  No hay JWT, o no tiene el formato correcto.
			//  Vamos a inicio:
			this.ruta.navigate(['login']);
		} else {
			this.servicioLogin.validarLogin().subscribe(
				res =>{
					console.log("validar: ", res);
					if (!res.servicio) {  //  Si no devuelve servicio, es que el JWT NO es válido.
						//  Vamos a inicio:
						this.ruta.navigate(['login']);
					}
				},
				error => console.log(error)
			);
    }
    
    const id = this.route.snapshot.params["id"];

    this.idInv = id;

    if(id == -1){
      this.texto = "Añadir";
    }
    else{
      this.servicioInv.getDetallesInv(id).subscribe(res=>{
        console.log(res)
        this.inv = res;
      })
      this.texto = "Modificar";
    }
  }

  validar(log) {
		console.log(log);
		//  Añadimos una nueva persona:
    
    if(this.idInv == -1){
      this.servicioInv.anadir(log).subscribe(
        res=>{
          if ((res.sesion) && (res.sesion == "NO")) {
            //  No se ha iniciado sesión, nos vamos al login:
            localStorage.JWT = "";
            localStorage.nombreUsuario = "";
            //  Actualizamos el menú principal:
            this.servicioUpdateMenu.establecerLogin({login: false, usuario:""});
            //  Vamos a inicio:
            this.ruta.navigate(['login']);
          } else {
            alert("Investigador/a añadido/a PERFECTAMENTE!!!!");
            //  Vamos a la lista de personas:
            this.ruta.navigate(['investigadores-listar']);
          }
        },
        error=>console.log(error)
      );
    }else{
      this.inv.id = this.idInv
      this.servicioInv.modificar(this.inv).subscribe(res=>{
        alert("Investigador/a modificado PERFECTAMENTE!!!");
        this.ruta.navigate(['investigadores-listar']);
      },
      error=>console.log(error)
      )
    }
	}

}
