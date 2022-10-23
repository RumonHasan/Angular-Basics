import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationsComponent } from './informations/informations.component';
import { InformationsListComponent } from './informations/informations-list/informations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationsComponent,
    InformationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
