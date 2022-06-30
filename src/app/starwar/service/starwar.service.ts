import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarService {

  private _url:string = "https://swapi.dev/api/";


  constructor(private _http:HttpClient) { }


  getPeople(id:string):any{
    return this._http.get(this._url+'people/'+id)
  }

  getPlanet(id:string):any{
    return this._http.get(this._url+'planets/'+id)
  }

  getStarship(id:string):any{
    return this._http.get(this._url+'starships/'+id)
  }

}
