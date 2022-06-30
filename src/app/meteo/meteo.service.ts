import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  http!:HttpClient; //déclaré comme variable car est initialisé en private dans le constructor

  // private _setVille: Set<string> = new Set;
  // public get setVille(): Set<string> {
  //   return this._setVille;
  // }
  // public set setVille(value: Set<string>) {
  //   this._setVille = value;
  // }


  // private _listeMeteo: string[] = [];
  // public get listeMeteo(): string[] {
  //   return this._listeMeteo;
  // }
  // public set listeMeteo(value: string[]) {
  //   this._listeMeteo = value;
  // }


  private _listeVille: any[] = [];
  public get listeVille(): any[] {
    return this._listeVille;
  }
  public set listeVille(value: any[]) {
    this._listeVille = value;
  }


  constructor(private _http:HttpClient) { 

    this.http = _http;
    
  }

  getMeteoVille(ville:string){ //va rendre un observable de l'api avec la ville qui nous interesse
    return this.http.get<any>('https://www.prevision-meteo.ch/services/json/'+ville);
  }

  addVille(ville:string){
    // //test pour n'afficher que 3 villes
    // if(this._listeMeteo.length > 2 ){
    //   this._listeMeteo.splice(0, 1);
    // }
    // this._listeMeteo.push(ville); // ajout de la ville à la liste

    // // if(this._setVille.has(ville) && this._setVille.size > 2){
    // //   this._setVille.
    // // }


    this.getMeteoVille(ville).subscribe((response)=>{
      if(response.fcst_day_0 != undefined || response.fcst_day_0 != null){
        console.log('reponse valid');
         //test pour n'afficher que 3 villes
        if(this.listeVille.length > 2 ){
          this.listeVille.splice(0, 1);
        }
        this.listeVille.push(response);
      }
      else{
        console.log('reponse invalid');
      }
    })

  }


}
