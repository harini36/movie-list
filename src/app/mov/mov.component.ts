import { Component, OnInit } from '@angular/core';
import { MovService } from '../service/mov.service';
import{ Mov} from './movmodule';

@Component({
  selector: 'app-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.scss']
})
export class MovComponent implements OnInit {
   counter=0
   movi:Mov={
     title:"",
     year:0,
     image:"",
     rating:0,
   }
   mov:Mov[];

  constructor(private movservice:MovService) { }

  ngOnInit(): void {
    this.loadmov()
  }
  
  poster(image):string{
    return './assets/'+image+'.png'
  }

  save(): void {
    const tempfilm: Mov = { ...this.movi};
    this.mov.push(tempfilm);
  }  

  loadmov():void{
    this.mov=this.movservice.getmov();
  }

}
