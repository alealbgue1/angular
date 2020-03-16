import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  private id:number;
  private num:any;
  private listaDetalles:any;

  private cantidad: number;
  private concepto: string;
  private precio: number;
  private tipo_iva: number;

  private muestraForm: boolean = false;
  private texto: string;

  private idDetalle: number;

  constructor(private peticion: PAjaxService, private ruta: Router, private route: ActivatedRoute) {
  }

  llamaditaAnade(){
    this.texto = "Añadir";
    this.idDetalle = -1;
    if(this.muestraForm == false)
      this.muestraForm = true;
    else
      this.muestraForm = false
  }

  llamaditaMod(detalles){
    this.idDetalle = detalles.id;
    console.log(this.idDetalle);
    
    this.texto = "Modificar";
    if(this.muestraForm == false){
      this.cantidad = detalles.cantidad;
      this.concepto = detalles.concepto;
      this.precio = detalles.precio;
      this.tipo_iva = detalles.tipo_iva;
      this.muestraForm = true;
    }
    else{
      this.id = 0;
      this.cantidad = 0;
      this.concepto = "";
      this.precio = 0;
      this.tipo_iva = 0;
      this.muestraForm = false;
    }
    
  }

  anadeOMod(){

    if(this.idDetalle == -1){
      var factura = {
        id_factura:this.id,
        cantidad: this.cantidad,
        concepto: this.concepto,
        precio: this.precio,
        tipo_iva: this.tipo_iva
      }
  
      this.peticion.anade(factura).subscribe(datos =>{
        console.log(datos);
        this.listaDetalles = datos;
      });
    }else{
      var fact = {
        id_factura:this.id,
        cantidad: this.cantidad,
        concepto: this.concepto,
        precio: this.precio,
        tipo_iva: this.tipo_iva,
        id: this.idDetalle
      }
  
      this.peticion.modifica(fact).subscribe(datos =>{
        console.log(datos);
        this.listaDetalles = datos;
      });

      this.id = 0;
      this.cantidad = 0;
      this.concepto = "";
      this.precio = 0;
      this.tipo_iva = 0;
      
    }
    
    this.muestraForm = false;
  }

  borrar(detalles){
    console.log(detalles);
    if(confirm("¿Deseas eliminar "+detalles.concepto+"?")){
      this.peticion.borrar(detalles.id, this.id).subscribe(datos =>{
        this.listaDetalles=datos;
      })
    }
  }

  ngOnInit() {
    const facturaId = this.route.snapshot.params["id"];
    const facturaNum = this.route.snapshot.params["numero"];
    console.log("id = " + facturaId);
    console.log("numero = " + facturaNum);

    this.id = facturaId;
    this.num = facturaNum;

    this.peticion.detalle(this.id).subscribe(datos =>{
      console.log(datos);
      this.listaDetalles = datos;
    });

  }

  

}
