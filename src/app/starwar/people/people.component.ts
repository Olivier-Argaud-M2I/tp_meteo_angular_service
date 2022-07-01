import { Component, OnInit } from '@angular/core';
import { ParamMap, Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  number:number = 2;

  constructor(
    private _router:Router, 
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params:ParamMap)=>{
      this.number = Number(params.get('id'));
    })
  }

  setNumber(value:number){
    this.number+=value;
    console.log('nouvelle valeur de number '+ this.number)
    this._router.navigate(['people/'+this.number])
  }

}
