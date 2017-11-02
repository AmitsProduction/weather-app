import { Params } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  params: URLSearchParams = new URLSearchParams();

  constructor(private http: Http) {
    this.params.set('appid', '76f4005b19ed17621981a7296567d54b');
  }

  getTemperature(cityName: string) {
    this.params.set('q', cityName);
    return this.http.get('http://samples.openweathermap.org/data/2.5/weather', { search: this.params });
  }
}
