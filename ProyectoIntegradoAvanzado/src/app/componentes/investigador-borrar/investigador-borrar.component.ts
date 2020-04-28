import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Inv } from 'src/app/models/inv';
import { InvestigadorService } from 'src/app/services/investigador.service';

@Component({
  selector: 'app-investigador-borrar',
  templateUrl: './investigador-borrar.component.html',
  styleUrls: ['./investigador-borrar.component.css']
})
export class InvestigadorBorrarComponent implements OnInit {

  @Input() invDel: Inv;

  @Output() eliminado = new EventEmitter();

  private clave: string;

  private boolean: boolean;

  constructor(private servicioInv: InvestigadorService) {
    this.clave = "";
  }

  ngOnInit() {
    console.log("ID para borrar", this.invDel.id);

    
  }

  check(clave){
    if(this.clave == "123"){
      this.boolean = true;
    }else{
      alert("La clave es incorrecta")
      this.boolean = false;
    }
  }

  borrar(){
    this.servicioInv.borrar(this.invDel.id).subscribe(datos =>{
      this.eliminado.emit(datos);
    })
  }

  cancelar(){
    this.eliminado.emit();
  }

}
