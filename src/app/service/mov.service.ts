import { Injectable } from '@angular/core';
import { mock } from '../mov/mocklist';
import { Mov } from '../mov/movmodule';



@Injectable({
  providedIn: 'root'
})
export class MovService {

  constructor() { }

  getmov():Mov[]{
    return mock;
  }
  getomov(title:string):Mov{
    return mock.find(Mov=>Mov.title===title);
    
  }

}
