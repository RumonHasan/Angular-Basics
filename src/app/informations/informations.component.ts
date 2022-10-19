import { Component, OnInit } from '@angular/core';
import { Information, InformationList } from './informations';

@Component({
  selector: 'basic-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
// general class struction of components ... since its a class structure variables need not need initializers
export class InformationsComponent implements OnInit {

  // using interpolation method of syntax
  informationHeader = 'Basic Introduction To Angular';
  numberOfInformations = 20;

  // hide information state
  hideRooms = false;
  
  // note interfaces creates a new name that is used as the new alias everywhere
  // types do not create any new aliases. 
  informations : Information = {
    totalInformation: 10,
    availableInformations: 20,
    bookedInformation: 340,
  };

  // information data as array of objects
  informationList: InformationList = [

  ]

  constructor() { }

  ngOnInit(): void {
    }

  // basic toggle function to switch between boolean
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

};