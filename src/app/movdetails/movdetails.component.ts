import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mov } from '../mov/movmodule';
import { MovService } from '../service/mov.service';

@Component({
  selector: 'app-movdetails',
  templateUrl: './movdetails.component.html',
  styleUrls: ['./movdetails.component.scss']
})
export class MovdetailsComponent implements OnInit {
  mov:Mov;
  
  constructor(private movservice:MovService,
    private activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    const title= this.activatedRoute.snapshot.paramMap.get('title');
    this.loadmov(title);
  }

  loadmov(title:string):void{
    this.mov=this.movservice.getomov(title);
    console.log(this.mov)
  }

  poster(image):string{
    return './assets/'+image+'.png'
  }

}
