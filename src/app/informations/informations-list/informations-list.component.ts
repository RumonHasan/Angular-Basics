import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { InformationList } from '../informations';

@Component({
  selector: 'basic-informations-list',
  templateUrl: './informations-list.component.html',
  styleUrls: ['./informations-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationsListComponent implements OnInit {

  //Gets the props from the parent component in order to display it in the child component
  @Input() informations : InformationList[] = [];
  @Input() title: String = '';

  // output of the single data object of the information emitted
  @Output() selectedInformation = new EventEmitter<InformationList>();

  constructor() { }

  // can only be used when there is an Input element; 
  // value needs to updated when the data is passed
  ngOnChanges(changes: SimpleChanges): void{
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  // emitting the data back to parent
  selectInformation(singleInformation: InformationList){
    this.selectedInformation.emit(singleInformation);
    // parent needs to subscribe to the event in order to receive the outputted information
  }

}
