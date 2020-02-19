import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/petClinic/API/petclinic/servicios.php";

  

}
