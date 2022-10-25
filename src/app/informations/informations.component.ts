import { identifierName } from '@angular/compiler';
import { AfterViewInit, Component, DoCheck, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { BasicId, Information, InformationList } from './informations';
import { HeaderComponent } from '../header/header.component';
import { HeaderObject } from '../header/headers';

@Component({
  selector: 'basic-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
// general class struction of components ... since its a class structure variables need not need initializers
export class InformationsComponent implements OnInit{
  // using interpolation method of syntax
  informationHeader = 'Basic Introduction To Angular';
  numberOfInformations = 20;
  nameString = '';
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

  // title property
  title = 'Information List';

  // syntax for specifying array of objects
  informationList: InformationList[] = [];

  // selected Information
  storedInformationFromChild!: InformationList;
  
  kabinDetails!: HeaderObject;

  kabinTitle!: String


  // View child for fetching external components;
  // @ViewChild(HeaderComponent,{
  //   static:true
  // }) headerComponentVariable!: HeaderComponent;


  @ViewChild('headerFromSomewhere', {static:true}) headerComponentVariable!:HeaderComponent
// accessing the data from the template ref

  constructor() {};

  ngOnInit(): void {
      this.kabinTitle = this.headerComponentVariable.headerObject.title;
      console.log(this.kabinTitle);

      this.informationList = [
        {
          infoNumber: 1,
          infoType: 'special Info',
          ammenities: 'many',
          price: 20,
          image: 'https://unsplash.com/photos/tq1AJDitMwE',
          checkInTime: new Date('20-October-2022'),
          checkOutTime: new Date('21-December-2022'),
          infoRate: 4.5
        },
        {
          infoNumber: 2,
          infoType: 'Exclusive Info',
          ammenities: 'many',
          price: 40,
          image: 'https://unsplash.com/photos/IafzlPZi1XQ',
          checkInTime: new Date('20-October-2022'),
          checkOutTime: new Date('21-December-2022'),
          infoRate: 4.5
        },
        {
          infoNumber: 3,
          infoType: 'Specific Infor',
          ammenities: 'many',
          price: 30,
          image: 'https://unsplash.com/photos/CoIuT17eVrg',
          checkInTime: new Date('20-October-2022'),
          checkOutTime: new Date('21-December-2022'),
          infoRate: 4.5
        }
      ]
    }
  
  

  // basic toggle function to switch between boolean
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'Some New Information Has Come To Light';
  };

  // display some details when clicking the name
  displayDetails(newNumber: BasicId){
    const {demoNumber} = newNumber;
    console.log(demoNumber);

  }

  // information received from the parent component
  selectInformation(information: InformationList){
    this.storedInformationFromChild = information;
  }

  // adding information
  addInformation(){
    // new information object
    const information: InformationList = {
      infoNumber: 6,
      infoType: 'New added Information',
      ammenities: 'many',
      price: 300,
      image: 'https://unsplash.com/photos/CoIuT17eVrg',
      checkInTime: new Date('20-October-2022'),
      checkOutTime: new Date('21-December-2022'),
      infoRate: 10.5
    };
    // pushing the information
    // mutable approach
    // this.informationList.push(information);

    // proper approach by preserving the old array and adding a new one
    const modifiedInformation = this.modifierInfo(information);
    this.informationList = [...this.informationList, modifiedInformation];

  }
  // reverses info title
  modifierInfo(information:InformationList){
    const {infoType} = information;
    const splitInfor = infoType.split(' ');
    let reverseTitle = '';
    for(let i = splitInfor.length - 1; i >= 0; i--){
      reverseTitle += splitInfor[i] + ' ';
    };
    // new object
    const newInformation = {
      ...information,
      infoType: reverseTitle
    }
    return newInformation;
  } 

};