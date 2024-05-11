import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css']
})
export class AllsongsComponent implements OnInit {

  constructor(
    private httpService:HttpServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllAlbums()
    this.getSongs()
    this.getUsers()
  }

  allAlbums:any;
  allSongs:any;
  allSongsAPI:any;
  allUsers:any;

  songSearch:any;

  searchSongName(){
    if(this.songSearch.length == 0){
      this.allSongs = this.allSongsAPI
    }
    else{
      let temp = this.allSongsAPI
      let filterArray = temp.filter((album:any) => album.title.toLowerCase().includes(this.songSearch.toLowerCase()));
      this.allSongs = filterArray
    }
  }

  getAllAlbums()
  {
    this.httpService.getAllAlbums().subscribe((res:any)=>{
      this.allAlbums = res;
    },(err:any)=>{
      console.error("Something went wrong,Please Try Again!.")
    })
  }
  getSongs(){
    this.httpService.getAllSongs().subscribe((res:any)=>{
      this.allSongs = res;
      this.allSongsAPI = res;
    },(err:any)=>{
      console.error("Something went wrong,Please Try Again!.")
    })
  }
  getUsers(){
    this.httpService.getAllUsers().subscribe((res:any)=>{
      this.allUsers = res;
      console.log(this.allUsers)
    },(err:any)=>{
      console.error("Something went wrong,Please Try Again!.")
    })
  }

}
