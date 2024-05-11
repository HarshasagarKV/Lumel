import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(
    private httpService:HttpServiceService
  ) { }

  ngOnInit(): void {
    this.getAllAlbums()
    this.getSongs()
    this.getUsers()
  }

  addPlayList:boolean = false
  myPlayList:any = [];
  songSearch:any;
  allAlbums:any;
  allSongs:any;
  curentList:any;
  allSongsAPI:any;
  curentIndex:any
  allUsers:any;
  createPlayList(){
    this.myPlayList.push([])
  }
  openPlayList(item:any,index:any){
    this.addPlayList = true;
    this.curentIndex= index
  }
  searchSongName(){
    console.log("Aaaaaaaaaaaa")
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

  addToPlayList(item:any){
    this.curentList.push(item)
    localStorage.setItem('myPLaylist'+this.curentIndex, JSON.stringify(this.curentList))
  }

}
