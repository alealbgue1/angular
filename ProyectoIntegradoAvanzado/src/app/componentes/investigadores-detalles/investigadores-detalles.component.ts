import { Component, OnInit } from '@angular/core';
import { Inv } from 'src/app/models/inv';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SucesosService } from 'src/app/services/sucesos.service';
import { Fenomenos } from 'src/app/models/fenomenos';

@Component({
  selector: 'app-investigadores-detalles',
  templateUrl: './investigadores-detalles.component.html',
  styleUrls: ['./investigadores-detalles.component.css']
})
export class InvestigadoresDetallesComponent implements OnInit {

  private arrInv: Inv;

  constructor(private servicioSucesos: SucesosService,private servicioInvestigadores: InvestigadorService, private route: ActivatedRoute, private ruta: Router) {
    this.arrInv = <Inv>{};
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

}
