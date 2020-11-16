import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{Listing} from '../list/listing';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  baseUrl = 'http://www.omdbapi.com/';
  apiKey = 'apikey=24b30b9e';

  constructor(private httpclient:HttpClient) { }
 
  getlist(page): Observable<any>{
       
    const url = `${this.baseUrl}?s=avengers&page=${page}&${this.apiKey}`;   
    return this.httpclient.get(url);
  }
  
 getlists(id):Observable<any>{
    
  const url = `${this.baseUrl}?i=${id}&${this.apiKey}`;     
  return this.httpclient.get(url);

 }
}
