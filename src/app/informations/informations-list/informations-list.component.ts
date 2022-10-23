import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InformationList } from '../informations';

@Component({
  selector: 'basic-informations-list',
  templateUrl: './informations-list.component.html',
  styleUrls: ['./informations-list.component.css']
})
export class InformationsListComponent implements OnInit {

  //Gets the props from the parent component in order to display it in the child component
  @Input() informations : InformationList[] = [];

  // output of the single data object of the information emitted
  @Output() selectedInformation = new EventEmitter<InformationList>();

  constructor() { }

  ngOnInit(): void {
  }

  // emitting the data back to parent
  selectInformation(singleInformation: InformationList){
    this.selectedInformation.emit(singleInformation);
    // parent needs to subscribe to the event in order to receive the outputted information
  }

}
