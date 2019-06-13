import {Component, OnInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interactiveSystem';

  ngOnInit(): void {

     $('body').niceScroll({cursorcolor:'#5D7B7C'});

  }
}

