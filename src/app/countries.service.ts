import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./model/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllCountries(): Promise<Array<Country>> {
    return this.httpClient.get<Array<Country>>("https://restcountries.eu/rest/v2/all").toPromise();
  }

  public getCountriesByName(name: string): Promise<Array<Country>> {
    return this.httpClient.get<Array<Country>>("https://restcountries.eu/rest/v2/name/" + name).toPromise();
  }

  public getCountriesByRegion(region: string): Promise<Array<Country>> {
    return this.httpClient.get<Array<Country>>("https://restcountries.eu/rest/v2/region/" + region).toPromise();
  }
}
