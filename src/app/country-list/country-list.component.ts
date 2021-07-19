import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Country} from "../model/country";
import {CountriesService} from "../countries.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  searchIcon = faSearch;
  public countries: Array<Country> = [];
  regions: Array<string> = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  @ViewChild('countryNameFilter', { static: true }) countryNameFilterElement: ElementRef;

  constructor(private countriesService: CountriesService, countryNameFilterElement: ElementRef) {
    this.countryNameFilterElement = countryNameFilterElement;
  }

  ngOnInit(): void {
    this.getAllCountries();
  }

  filterCountriesByRegion(region: string) {
    this.countriesService.getCountriesByRegion(region).then(countries => {
      this.countries = countries;
    });
  }

  filterCountriesByName() {
    let name = this.countryNameFilterElement.nativeElement.value;
    if (name) {
      this.countriesService.getCountriesByName(name).then(countries => {
        this.countries = countries;
      });
    } else {
      this.getAllCountries();
    }
  }

  private getAllCountries() {
    this.countriesService.getAllCountries().then(countries => {
      this.countries = countries;
    });
  }

}
