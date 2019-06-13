import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider, LinkedinLoginProvider, SocialUser
} from 'angular-6-social-login';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocialSignInService {

  constructor(private socialAuthService: AuthService , private userService: UserService, private router:Router) { }




  public socialSignIn(socialPlatform : string , role:string = '') { // default  value to disallow error,, duo to function  socialSignIn calling during app booting

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
         this.userService.loginSocialUser(role ,  userData).subscribe(
           (data) => {
             console.log(data);
             if(typeof  data =="object" && data.message.includes('please login')) {
               document.getElementById('error').innerText = 'password or mail invalid .. ';
               localStorage.setItem('token' , '');
               setTimeout(function () {
                 document.getElementById('error').innerText= '';
               }, 4000);
             }
             else
             {
               localStorage.setItem('token' , data.token); // then navigate to dashboard

               if(role === 'hr')
                 this.router.navigate(['/dashboard/hr']);

               if(role === 'candidate')
                 this.router.navigate(['/']);
             }

           }, (error) =>{
              console.log(error) ;
           });

      }

    );
  }




  public socialSignUp(socialPlatform : string , role:string = '') { // default  value to disallow error,, duo to function  socialSignIn calling during app booting

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.userService.SignUpSocialUser( role ,  userData).subscribe(
          (data) => {
            if (typeof  data == "object" && data.message.includes('Duplicate'))
            {
                document.getElementById('error').innerText = 'The email already exist';

                setTimeout(function () {
                  document.getElementById('error').innerText = '';
                }, 4000);

            }
            else
            {
              localStorage.setItem('token' , data.token); // then navigate to dashboard
              if(role === 'hr')
                this.router.navigate(['/dashboard/hr']);

              if(role === 'candidate')
                this.router.navigate(['/']);
            }

          }, (error) =>{
            console.log(error) ;
          });

      }

    );
  }




}
