import { Component, Input } from '@angular/core';

import { FormattedWeather } from '../../models/weather';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {
  @Input() weatherInfo: FormattedWeather | undefined;
}
