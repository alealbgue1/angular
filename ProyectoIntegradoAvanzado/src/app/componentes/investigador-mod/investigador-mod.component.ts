import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Inv } from 'src/app/models/inv';
import { InvestigadorService } from 'src/app/services/investigador.service';

@Component({
  selector: 'app-investigador-mod',
  templateUrl: './investigador-mod.component.html',
  styleUrls: ['./investigador-mod.component.css']
})
export class InvestigadorModComponent implements OnInit {

  @Input() invMod: Inv;

  @Output() modificado = new EventEmitter();

  private contrasena: string;

  private boolean: boolean;

  constructor(private servicioInv: InvestigadorService) {
    this.contrasena = "";

    this.invMod = <Inv>{};
  }

  ngOnInit() {
    console.log("ID para borrar", this.invMod.id);

    
  }

  check(contrasena){
    if(this.contrasena == "123"){
      this.boolean = true;
    }else{
      alert("La clave es incorrecta")
      this.boolean = false;
    }
  }

  validar(datos){
    console.log("MODIFICAR", datos);

    this.invMod.nombre = datos.nombre;
    this.invMod.apellidos = datos.apellidos;
    this.invMod.email = datos.email

    console.log("InvMod", this.invMod)

    this.servicioInv.modificar(this.invMod).subscribe(datos=>{
      this.modificado.emit(datos);
    })
  }

  cancelar(){
    this.modificado.emit();
  }

}
