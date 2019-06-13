import { Component, OnInit} from '@angular/core';
declare let $: any;
import {JobService} from '../../Services/job.service';
import {CandidateService} from '../../Services/candidate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private jobService: JobService , private candidateService: CandidateService , private route:Router) {  }
  jobList:any;
  spinnerState:any = true;
  DataState:any = false;
  jobId:any;
  candidateId:any;
  cv:any ='';
  disableState = false;


  ngOnInit() {
    $(document).ready(function () {
      const height  = $(window).height();
      $('header').height(height);

      const bag = $('.pop-card');
      bag.draggable();
      // const bag = $('.pop-card');
      //  bag.draggable();
      // $('html, body').css({
      //   overflow: 'hidden',
      //   height: '100%'
      // });
    });

    this.jobService.findAllJobs().subscribe(jobs => {
      this.jobList = jobs;

      // not important but i do it for show spinner Xd
      setTimeout(() => {
        this.spinnerState = false;
      }, 2000);

      this.DataState = true;
    });


  }

  closeOberlay()
  {
    $('#cv-overlay').css('display' , 'none');
    $('html, body').css({
      overflow: 'auto',
    });
    $('.pop-card').css("top","100px");
  }



  applyJob(jobId)
  {

    $('html, body').css({
      overflow: 'hidden',
    });
    $('#cv-overlay').css('display' , 'block');
    $('.pop-card').animate({
        top: $("#card1").offset().top},
      'slow');

    const token = localStorage.getItem('token');
    if(token !== undefined && token !== null)
    {
      this.candidateService.getCandidate(token).subscribe((result) =>{
        if(result.message.includes('candidate found')){

            this.jobId = jobId;
            this.candidateId = result.candidate.id;

        }
        else if(result.message.includes('not found candidate'))
        {
          $('#err-msg').text('please login as candidate to can apply');
          this.disableState =true;
        }

      }, error =>{
          this.route.navigate(['/']);
      });
    }
  }

  formValidation():boolean
  {
    return ! (this.cv.length === 0  );
  }

  createApplied()
  {
    // for candidate which applied we do  two things
     // add aplied
    if(this.formValidation())
    {
      this.candidateService.addApplied(this.jobId , this.candidateId).subscribe(data => {
        $('#err-msg').text('successfully applied');
      });
      // update cv
      this.candidateService.updateCandidateByCv(this.cv , this.candidateId ).subscribe(data => console.log(data));
    }
    else
      $('#err-msg').text('cv requirded');

  }

}

