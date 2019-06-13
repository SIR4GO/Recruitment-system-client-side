import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-author-signup',
  templateUrl: './candidate-signup.component.html',
  styleUrls: ['./candidate-signup.component.css']
})
export class CandidateSignupComponent implements OnInit {

  private active: boolean;

  constructor() { }

  ngOnInit() {

    $('.author-button').addClass('edit-background');
    $('.follower-button').removeClass('edit-background');
    $('.signup-btn , .signup-gmail , #social-label').css('display' ,'block');


  }





}
