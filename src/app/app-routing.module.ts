import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AzureCredentialComponent } from './azure-credential/azure-credential.component';
import { GcpCredentialComponent } from './gcp-credential/gcp-credential.component';
import { AwsCredentialComponent } from './aws-credential/aws-credential.component';
import { HomeComponent } from './home/home.component';
import { CloudSelectionComponent } from './cloud-selection/cloud-selection.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cloud-selection',
    component: CloudSelectionComponent
  },
  {
    path: 'azure',
    component: AzureCredentialComponent
  },
  {
    path: 'gcp',
    component: GcpCredentialComponent
  },
  {
    path: 'aws',
    component: AwsCredentialComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
