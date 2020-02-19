import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navBar ={
    cerrao: true,
    owners: {
      dropdown: true
    },
    vets:{
      dropdown: true
    }
  }
}
