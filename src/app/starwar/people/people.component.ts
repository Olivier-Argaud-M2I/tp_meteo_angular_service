import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  number:number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  setNumber(value:number){
    this.number+=value;
    console.log('nouvelle valeur de number '+ this.number)
  }

}
