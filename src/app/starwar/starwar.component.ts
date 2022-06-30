import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-starwar',
  templateUrl: './starwar.component.html',
  styleUrls: ['./starwar.component.css']
})
export class StarwarComponent implements OnInit {

  article!:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms:ParamMap)=>{
      const id = parms.get('id');
      this.article != id;

    })
    // this.article = this.route.snapshot.paramMap.get('id') as string;// optimisation ducoup un seulk chargement donc bug
  }

}
