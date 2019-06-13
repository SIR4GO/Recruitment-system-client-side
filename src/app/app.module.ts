import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './Routes/Routes';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeSignupComponent } from './Components/home-signup/home-signup.component';
import { HrSignupComponent } from './Components/home-signup/hr-signup/hr-signup.component';
import { CandidateSignupComponent } from './Components/home-signup/candidate-signup/candidate-signup.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  // FacebookLoginProvider,
} from 'angular-6-social-login';
import {SocialSignInService} from './Services/social-sign-in.service';
import {UserService} from './Services/user.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HrDashboardComponent } from './Components/dashboard/hr-dashboard/hr-dashboard.component';
import { FollowerDashboardComponent } from './Components/dashboard/follower-dashboard/follower-dashboard.component';
import { HomeLoginComponent } from './Components/home-login/home-login.component';
import { JobsComponent } from './Components/dashboard/hr-dashboard/jobs/jobs.component';
import { AddJobComponent } from './Components/dashboard/hr-dashboard/jobs/add-job/add-job.component';
import { LastJobsComponent } from './Components/dashboard/hr-dashboard/jobs/last-jobs/last-jobs.component';
import { BrowseLastJobComponent } from './Components/dashboard/hr-dashboard/jobs/browse-last-job/browse-last-job.component';
import {JobService} from './Services/job.service';
import {HrService} from './Services/hr.service';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import {CandidateService} from './Services/candidate.service';


// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      // {
      //   id: FacebookLoginProvider.PROVIDER_ID,
      //   provider: new FacebookLoginProvider("268815873963865")
      // },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("371111978583-c2sbhkag9ervm0qtv4j5ur3jbkltqi88.apps.googleusercontent.com")
      },

    ]
);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HomeSignupComponent,
    HrSignupComponent,
    CandidateSignupComponent,
    DashboardComponent,
    HrDashboardComponent,
    FollowerDashboardComponent,
    HomeLoginComponent,
    JobsComponent,
    AddJobComponent,
    LastJobsComponent,
    BrowseLastJobComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SocialLoginModule,


  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    SocialSignInService,
    UserService,
    JobService,
    HrService,
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
