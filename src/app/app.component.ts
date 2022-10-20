import { Component } from '@angular/core';

@Component({
  selector: 'basic-root',
  templateUrl: './app.component.html', // connected to the component html
  // template:'<h1>Direct inject of html code through template</h1>',
  styleUrls: ['./app.component.css'],
  // inline styles format
  // styles: [`h1 {color: red;}`],
})
export class AppComponent {
  title = 'Angular-Basics';
  role  = 'User';
}
