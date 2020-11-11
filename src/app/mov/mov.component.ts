import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import{ Mov} from './movmodule';

@Component({
  selector: 'app-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.scss']
})
export class MovComponent implements OnInit {
   counter=0
   movi:Mov={
     name:"",
     year:0,
     image:"",
     rating:0,


   }
   mov:Mov[]=[
    {
      name:"god father",
      year:100,
      image:'god',
      rating:1,
 
 
    },
    {
      name:"angry bird",
      year:200,
      image:'angrymen',
      rating:1,
 
 
    },
    {
      name:"Toy story",
      year:100,
      image:'toy',
      rating:1,
 
 
    },

   ]

  constructor() { }

  ngOnInit(): void {
  }
  
  poster(image):string{
    return './assets/'+image+'.png'
  }

  save(): void {
    const tempfilm: Mov = { ...this.movi};
    this.mov.push(tempfilm);
  }  

}
