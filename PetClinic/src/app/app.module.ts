import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerDetallesComponent } from './components/owner-detalles/owner-detalles.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PetsComponent } from './components/pets/pets.component';
import { FormPetComponent } from './components/form-pet/form-pet.component';
import { VisitComponent } from './components/visit/visit.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetallesComponent,
    FormOwnerComponent,
    PetsComponent,
    FormPetComponent,
    VisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
