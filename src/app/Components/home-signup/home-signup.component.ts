import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {SocialSignInService} from '../../Services/social-sign-in.service';
import {UserService} from '../../Services/user.service';



@Component({
  selector: 'app-home-signup',
  templateUrl: './home-signup.component.html',
  styleUrls: ['./home-signup.component.css']
})
export class HomeSignupComponent implements OnInit {

  role: any = 'author';

  name:any = '';
  email:any = '';
  password:any = '';
  cv:any = '';


  constructor(private router: Router , private socialSign: SocialSignInService , private userService: UserService) {
    //this.router.navigate(['/signup/author']); // redirect to default child component

  }


  ngOnInit() {

    $('.signup-btn , .signup-gmail').css('display' ,'none');
    const height = $(window).height();
    $('.signup-options').height(height);

  }

  formValidation():boolean
  {
    return ! (this.name.length === 0 || this.email.length === 0 || this.password.length === 0 );
  }

  errorHandler()
  {
    const errorMessage =  document.getElementById('error');
    errorMessage.innerText = '* All fields requirded ';
    errorMessage.style.display = 'block';
  }

  changeBackground(actor:any)
  {
    $(actor).addClass('edit-temp-background');
  }

  removeBackground(actor:any)
  {
    $(actor).removeClass('edit-temp-background')
  }


  // listen to click  event on buttons
  changeUrl(actor:any)
  {
    if(actor.value.includes('candidate') )
    {
      console.log('here');
      this.router.navigate(['/signup/candidate']);

    }else if (actor.value.includes('hr') )
    {
      this.router.navigate(['/signup/hr']);

    }

  }


  signUp(platform: string )
  {
    // first solution
    if(this.router.url.includes('candidate'))
      this.role = 'candidate';
    if(this.router.url.includes('hr'))
      this.role =  'hr';

    console.log(this.role);

    if(platform.includes('typical') && this.formValidation())
    {
      if(platform.includes('typical'))
      {
        this.userService.typicalRegister(this.name,this.email,this.password,this.role).subscribe(
          (data) => {

            if(typeof  data =="object" && data.message.includes('Duplicate')){
              document.getElementById('error').innerText= 'The email already exist';
              setTimeout(function () {
                document.getElementById('error').innerText= '';
              }, 4000);
            }
            else
            {
              localStorage.setItem('token' , data.token); // then navigate to dashboard

              if(this.role === 'hr')
                this.router.navigate(['/dashboard/hr']);

              if(this.role === 'candidate')
                this.router.navigate(['/']);
            }

          }, (error) => {
            console.log(error);
          });
      }
    }
    else  if(platform.includes('google'))
    {
      this.socialSign.socialSignUp(platform , this.role );
    }
    else
        this.errorHandler();




  }



}
