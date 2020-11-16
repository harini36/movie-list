import { Component, OnInit } from '@angular/core';
import {ListsService} from 'src/app/service/lists.service';
import { Listing } from './listing';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page=1;

  movie: Listing[];

  constructor(private listsservice:ListsService) { }

  ngOnInit(): void {
    this.loadlist();
     
    }

  loadlist():void{
    this.listsservice.getlist(this.page).subscribe(responce=>{
      this.movie=responce.Search;
    })

  }


  paginate(direction){
    this.page += direction;
    this.loadlist();
  }

}
