import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: '', redirectTo:'/countries', pathMatch:"full"},
  { path: 'country/:name', component: CountryDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
