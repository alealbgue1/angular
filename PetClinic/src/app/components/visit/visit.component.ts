import { Component, OnInit, Input } from '@angular/core';
import { Visits } from 'src/app/models/visits';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  @Input() visits: Visits[];

  constructor() { }

  ngOnInit() {
  }

}
