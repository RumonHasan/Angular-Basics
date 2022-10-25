import { Component, OnInit } from '@angular/core';
import { HeaderObject } from './headers';

@Component({
  selector: 'basic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerObject: HeaderObject ={
    name:'Kabin',
    title: 'Software Engineer',
    date: '2022/01/01',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
