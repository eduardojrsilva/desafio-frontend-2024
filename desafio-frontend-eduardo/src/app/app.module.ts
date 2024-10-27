import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

import { BugSvgComponent } from './components/svgs/bug-svg/bug-svg.component';
import { ElectricSvgComponent } from './components/svgs/electric-svg/electric-svg.component';
import { FireSvgComponent } from './components/svgs/fire-svg/fire-svg.component';
import { GrassSvgComponent } from './components/svgs/grass-svg/grass-svg.component';
import { GroundSvgComponent } from './components/svgs/ground-svg/ground-svg.component';
import { IceSvgComponent } from './components/svgs/ice-svg/ice-svg.component';
import { NormalSvgComponent } from './components/svgs/normal-svg/normal-svg.component';
import { RockSvgComponent } from './components/svgs/rock-svg/rock-svg.component';
import { WaterSvgComponent } from './components/svgs/water-svg/water-svg.component';
import { SvgDisplayControlComponent } from './components/svgs/svg-display-control/svg-display-control.component';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { PokemonStatNamePipe } from './pipes/pokemon-stat-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    PokemonCardComponent,
    BugSvgComponent,
    ElectricSvgComponent,
    FireSvgComponent,
    GrassSvgComponent,
    GroundSvgComponent,
    IceSvgComponent,
    NormalSvgComponent,
    RockSvgComponent,
    WaterSvgComponent,
    SvgDisplayControlComponent,
    TemperaturePipe,
    PokemonStatNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
