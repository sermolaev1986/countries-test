import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountriesService} from "../countries.service";
import {Country} from "../model/country";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {

  public backIcon = faArrowLeft;
  public country: Country;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) {
    this.route.params.subscribe(params => {
      this.countriesService.getCountriesByName(params['name']).then(countries => {
        this.country = countries[0];
      });
    });
  }

}
