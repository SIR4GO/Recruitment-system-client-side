import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-follower-signup',
  templateUrl: './hr-signup.component.html',
  styleUrls: ['./hr-signup.component.css']
})
export class HrSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.author-button').removeClass('edit-background');
    $('.follower-button').addClass('edit-background');
    $('.signup-btn , .signup-gmail , #social-label').css('display' ,'block');
  }


}
