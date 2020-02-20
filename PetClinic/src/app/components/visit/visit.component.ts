import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Visits } from 'src/app/models/visits';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitService } from 'src/app/servicios/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  @Input() visits: Visits[];

  @Output() eliminado = new EventEmitter();

  constructor(private servicioVisit: VisitService, private route: ActivatedRoute, private ruta: Router) { }

  ngOnInit() {
  }

  borrarVisit(id){
    if(confirm("Deseas borrar esta visita?")){
      this.servicioVisit.borrarVisit(id).subscribe(datos =>{
        this.eliminado.emit(datos);
      })
    }
    
  }

}
