import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
// general class struction of components
export class InformationsComponent implements OnInit {

  // using interpolation method of syntax
  informationHeader = 'Basic Introduction To Angular';
  numberOfInformations = 'some number of information'

  constructor() { }

  ngOnInit(): void {
  }

};