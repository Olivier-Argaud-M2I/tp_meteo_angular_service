import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { People } from '../../model/people';
import { StarwarService } from '../../service/starwar.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  @Input() number:number=0;

  people!:People;

  constructor(private _starwarService:StarwarService) { }

  ngOnInit(): void {
    this.actualisationPerso();
  }
  ngOnChanges(){
    console.log(' ca change de perso '+this.number)
    this.actualisationPerso();
  }

  actualisationPerso(){
    this._starwarService.getPeople(this.number.toString()).subscribe((reponse: People)=>{
      this.people = reponse;
    })
  }
 
}
