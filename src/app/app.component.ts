import { NgForm } from '@angular/forms';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { WeatherService } from './weather-api/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('f') inputForm: NgForm;

  constructor(private ws: WeatherService) {}

  onSubmit() {
    this.ws.getTemperature(this.inputForm.value.city)
    .subscribe(
      (res) => {
        if (res) {
          console.log(res);
        }
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
}
