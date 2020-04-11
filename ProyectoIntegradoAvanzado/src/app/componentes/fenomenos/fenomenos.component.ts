import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fenomenos } from 'src/app/models/fenomenos';
import { SucesosService } from 'src/app/services/sucesos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fenomenos',
  templateUrl: './fenomenos.component.html',
  styleUrls: ['./fenomenos.component.css']
})
export class FenomenosComponent implements OnInit {

  @Input() fenomeno: Fenomenos;

  @Output() eliminado = new EventEmitter();

  constructor(private servicioSucesos: SucesosService, private route: ActivatedRoute, private ruta: Router) { }

  ngOnInit() {
    console.log("Objeto fenomeno", this.fenomeno)
  }

  borrar(id){
    if(confirm("¿Deseas borrar este fenomeno?")){
      this.servicioSucesos.borraFenomenos(id).subscribe(datos=>{
        console.log("DATOS BORRADO", datos)
        this.eliminado.emit(datos);
      })
    }
  }

}
