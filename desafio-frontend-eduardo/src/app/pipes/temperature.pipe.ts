import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: number): string {
    const formattedTemperature = Math.round(temperature);

    return `${formattedTemperature}°C`;
  }

}
