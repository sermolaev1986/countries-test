export type Country = {
  name: string,
  region: string,
  subregion: string,
  population: number,
  capital: string,
  flag: string,
  nativeName: string,
  topLevelDomain: string,
  languages: Array<Language>,
  currencies: Array<Currency>
}

export type Language = {
  name: string
}

export type Currency = {
  name: string
}
