import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormattedWeather } from '../../models/weather';
import { NgForm } from '@angular/forms';
import { formatWeatherResponse, isRaining } from '../../utils/weather';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weatherInfo: FormattedWeather | undefined;
  isRaining: boolean = false;

  constructor(private weatherService: WeatherService) { }

  onSubmitForm({ value, }: NgForm) {
    const { city, country } = value;

    this.weatherService.getCityWeather(city, country).subscribe(data => {
      this.weatherInfo = formatWeatherResponse(data);
      this.isRaining = isRaining(this.weatherInfo.weather);
    });
  }
}
