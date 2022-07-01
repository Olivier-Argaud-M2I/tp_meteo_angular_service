import { Component, Input, OnInit } from '@angular/core';
import { People } from '../../model/people';
import { StarwarService } from '../../service/starwar.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  @Input() number:any="0";

  // number:any="5";

  people!:People;

  constructor(
    private _starwarService:StarwarService,
  ) { }

  ngOnInit(): void {
    // this._route.paramMap.subscribe((params:ParamMap)=>{
    //   this.number = params.get('id');
    // })

    this.actualisationPerso();
  }
  ngOnChanges(){
    console.log(' ca change de perso '+this.number)
    this.actualisationPerso();
  }

  actualisationPerso(){
    this._starwarService.getPeople(this.number).subscribe((reponse: People)=>{
      this.people = reponse;
    })
  }
 
}
