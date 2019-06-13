import { Component, OnInit } from '@angular/core';
import {JobService} from '../../../../../Services/job.service';
import {HrService} from '../../../../../Services/hr.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  title:any = '';
  description:any ='';
  requirement:any = '';
  date:any = '';
  hrId:any = null;

  emptyElement: any;

  constructor(private jobService: JobService , private hrService: HrService) { }

  ngOnInit() {

  }

  formValidation():boolean
  {
     return ! (this.title.length === 0 || this.description.length === 0 || this.requirement.length === 0 || this.date.length === 0);
  }

  errorHandler()
  {
    const errorMessage =  document.getElementById('Message');
    errorMessage.innerText = '* All fields requirded or time invalid';
    errorMessage.style.display = 'block';
  }

  messageHandler(message)
  {
    const successMessage =  document.getElementById('Message');
    successMessage.innerText = message;
    successMessage.style.display = 'block';
    successMessage.style.fontSize='16px';

    setTimeout(function () {
      successMessage.innerText = '';
    },6000)

  }

  createJob(){

    if(this.formValidation()) {

      const token = localStorage.getItem('token');

      if(token != undefined && token != '')
      {
        this.hrService.getHr(token).subscribe((data) => {
           //console.log(data);
            // create job
            this.jobService.addJob(this.title,this.description,this.requirement,this.date, data.hr.id).subscribe(
              res=> {

                if(res.message.includes("Duplicate"))
                    this.messageHandler('Job description already exist change in job description');
                else
                   this.messageHandler(res.message)
              }
            );

          }, error => {
           //  console.log(error);
           });
      }

      // some thing error

    }
    else
       this.errorHandler();

  }

}
