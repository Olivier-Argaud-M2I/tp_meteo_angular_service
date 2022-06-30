import { Component, OnInit } from '@angular/core';
import { MeteoService } from './meteo.service';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {


  meteoService!:MeteoService;

  constructor(private _meteoService:MeteoService) {
    this.meteoService = _meteoService
  }


  ngOnInit(): void {
  }

  appelMeteo(ville:string){
    this.meteoService.addVille(ville);
  }
}
