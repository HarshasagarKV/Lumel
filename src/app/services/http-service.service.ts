import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getAllAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  getAllSongs(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos'); 
  }
  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users'); 
  }
}
