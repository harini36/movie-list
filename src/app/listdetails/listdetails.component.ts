import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../list/listing';
import { ListsService } from '../service/lists.service';


@Component({
  selector: 'app-listdetails',
  templateUrl: './listdetails.component.html',
  styleUrls: ['./listdetails.component.scss']
})
export class ListdetailsComponent implements OnInit {
  lists:Listing;

 

  constructor(private listsservice:ListsService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadlists();
  }
  
  loadlists():void{
 const id= this.activatedRoute.snapshot.paramMap.get('id');
  this.listsservice.getlists(id).subscribe(response =>{
    this.lists=response;

  })
}

}


