import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-author-dashboard',
  styleUrls: ['./hr-dashboard.component.css'],
  templateUrl: './hr-dashboard.component.html'
})

export class HrDashboardComponent implements OnInit {

  constructor() {}

  ngOnInit()
  {
    const bag = $('.bag');
    bag.draggable({containment:".topic-sheet"}).resizable({ cancel: ".cancel"});
  }




}
