import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {SocialSignInService} from '../../Services/social-sign-in.service';
import {UserService} from '../../Services/user.service';


@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  role: any = 'candidate';

  email:any = '';
  password:any = '';

  constructor(private router: Router , private socialSign: SocialSignInService , private userService: UserService) {};


  ngOnInit() {
    $('.signup-btn , .signup-gmail , #social-label').css('display' ,'none');
    const height = $(window).height();
    $('.signup-options').height(height);
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
      this.router.navigate(['/login/candidate']);

    }else if (actor.value.includes('hr') )
    {
      this.router.navigate(['/login/hr']);

    }
  }


  formValidation():boolean
  {
    return ! (this.email.length === 0 || this.password.length === 0 );
  }

  errorHandler()
  {
    const errorMessage =  document.getElementById('error');
    errorMessage.innerText = '* All fields requirded ';
    errorMessage.style.display = 'block';
  }

  login(platform: string ) {

    if (this.router.url.includes('candidate'))
      this.role = 'candidate';
    if (this.router.url.includes('hr'))
      this.role = 'hr';

    console.log(this.role);

    if (platform.includes('typical') && this.formValidation()) {

      // first solution

      if (platform.includes('typical')) {
        this.userService.typicalLogin(this.email, this.password, this.role).subscribe(
          (data) => {
            console.log(data);
            if (typeof  data == "object" && data.message.includes('please login')) {
              document.getElementById('error').innerText = 'password or mail invalid .. ';
              localStorage.setItem('token', '');
              setTimeout(function () {
                document.getElementById('error').innerText = '';
              }, 4000);
            }
            else {
              localStorage.setItem('token', data.token); // then navigate to dashboard
              if (this.role === 'hr')
                this.router.navigate(['/dashboard/hr']);

              if (this.role === 'candidate')
                this.router.navigate(['/']);
            }


          }, (error) => {
            console.log(error);
          });
      }

    }
    else if(platform.includes('google'))
    {
        this.socialSign.socialSignIn(platform , this.role );
    }
    else
      this.errorHandler();


  }
}
