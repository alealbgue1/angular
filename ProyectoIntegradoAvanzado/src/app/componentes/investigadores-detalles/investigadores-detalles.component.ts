import { Component, OnInit } from '@angular/core';
import { Inv } from 'src/app/models/inv';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SucesosService } from 'src/app/services/sucesos.service';
import { Fenomenos } from 'src/app/models/fenomenos';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-investigadores-detalles',
  templateUrl: './investigadores-detalles.component.html',
  styleUrls: ['./investigadores-detalles.component.css']
})
export class InvestigadoresDetallesComponent implements OnInit {

  private arrInv: Inv;

  private investigador: Inv[];

  private del: boolean;

  private mod: boolean;

  constructor(private servicioSucesos: SucesosService,private servicioInvestigadores: InvestigadorService, private route: ActivatedRoute, private ruta: Router) {
    this.arrInv = <Inv>{};

    this.del = false;

    this.mod = false;
   }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];

    this.servicioInvestigadores.obtenerInvId(id).subscribe(datos=>{
      //console.log(datos);
      this.arrInv = datos;
    })

    this.servicioSucesos.getFenomenosIdInv(id).subscribe(datos=>{
      
      this.arrInv.fenomenos = datos;
      console.log("fenomeno", this.arrInv.fenomenos);
    })

  }

  actualizaBorrar(datos){
    console.log(datos);

    if(datos.result == "OK"){
      alert("FENOMENO eliminado con éxito");
      this.servicioSucesos.getFenomenosIdInv(this.arrInv.id).subscribe(datos=>{
        this.arrInv.fenomenos = datos;
      })
    }
  }

  borrarInv(datos){
    console.log("Borrar", datos);

    this.del = true;

    this.investigador = datos;
  }

  actualizarBorrar(datos){
    
    if(datos){
      this.ruta.navigate(['/investigadores-listar']);
    }
 
    this.del = false;
   }

  modInv(datos){
    console.log("Modificar", datos);

    this.mod = true;
    
    this.investigador = datos;
  }

  actualizarModificar(datos){

    if(datos){
      console.log(datos);
      this.investigador = datos;
    }

    this.mod = false;
  }

  

}
