import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedTab:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tabToggler(source:number){
    if(source)
      this.selectedTab = true
    else  
      this.selectedTab = false
  }
}
