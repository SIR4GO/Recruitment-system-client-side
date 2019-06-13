import { Routes } from "@angular/router";
import { HomeComponent } from "../Components/home/home.component";
import { HomeSignupComponent } from "../Components/home-signup/home-signup.component";
import { HrSignupComponent } from "../Components/home-signup/hr-signup/hr-signup.component";
import { CandidateSignupComponent } from "../Components/home-signup/candidate-signup/candidate-signup.component";
import { RootActivationService } from "../Auth Services/RootActivation";
import { HrDashboardComponent } from "../Components/dashboard/hr-dashboard/hr-dashboard.component";
import { FollowerDashboardComponent } from "../Components/dashboard/follower-dashboard/follower-dashboard.component";
import { HomeLoginComponent } from "../Components/home-login/home-login.component";
import { JobsComponent } from "../Components/dashboard/hr-dashboard/jobs/jobs.component";
import { AddJobComponent } from "../Components/dashboard/hr-dashboard/jobs/add-job/add-job.component";
import { LastJobsComponent } from "../Components/dashboard/hr-dashboard/jobs/last-jobs/last-jobs.component";
import { BrowseLastJobComponent } from "../Components/dashboard/hr-dashboard/jobs/browse-last-job/browse-last-job.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: "signup",
    component: HomeSignupComponent,
    canActivate: [RootActivationService],
    children: [
      { path: "hr", component: HrSignupComponent },
      { path: "candidate", component: CandidateSignupComponent }
    ]
  },

  {
    path: "login",
    component: HomeLoginComponent,
    canActivate: [RootActivationService],
    children: [
      { path: "hr", component: HrSignupComponent },
      { path: "candidate", component: CandidateSignupComponent }
    ]
  },

  {
    path: "dashboard",
    canActivate: [RootActivationService],
    children: [
      {
        path: "hr",
        component: HrDashboardComponent,
        canActivate: [RootActivationService],
        children: [
          {
            path: "jobs",
            component: JobsComponent,
            canActivate: [RootActivationService],
            children: [
              {
                path: "add-job",
                canActivate: [RootActivationService],
                component: AddJobComponent
              },
              {
                path: "last-jobs",
                canActivate: [RootActivationService],
                component: LastJobsComponent
              },
              {
                path: "browse-job",
                canActivate: [RootActivationService],
                component: BrowseLastJobComponent
              }
            ]
          }
        ]
      },

      { path: "follower", component: FollowerDashboardComponent }
    ]
  },

  { path: "**", redirectTo: "" } // must be last rout duo to cause redirect to '' if any route match from here
];
