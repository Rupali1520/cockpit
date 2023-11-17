import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AzureCredentialComponent } from './azure-credential/azure-credential.component';
import { GcpCredentialComponent } from './gcp-credential/gcp-credential.component';
import { AwsCredentialComponent } from './aws-credential/aws-credential.component';
import { HomeComponent } from './home/home.component';
import { CloudSelectionComponent } from './cloud-selection/cloud-selection.component';
import { EksClusterComponent } from './eks-cluster/eks-cluster.component';
import { AksClusterComponent } from './aks-cluster/aks-cluster.component';
import { GkeClusterComponent } from './gke-cluster/gke-cluster.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'cloud-selection',
        children: [
          {
            path:'',
            component: CloudSelectionComponent,
            data:{title:'deploy'}
          },
          {
            path: 'azure',
            children: [
              {
                path: '',
                component: AzureCredentialComponent
              },
              {
                path: 'azure2',
                component: AksClusterComponent
              },
            ]
          },
          {
            path: 'gcp',
            children: [
              {
                path: '',
                component: GcpCredentialComponent
              },
              {
                path: 'gcp2',
                component: GkeClusterComponent
              }
            ]
          },
          {
            path: 'aws',
            children: [
              {
                path: '',
                component: AwsCredentialComponent
              },
              {
                path: 'aws2',
                component: EksClusterComponent
              },
            ]
          },
        ]
      },
      {
        path: 'delete-cloud-selection',
        children: [
          {
            path:'',
            component: CloudSelectionComponent,
            data:{title:'delete'}
          },
          {
            path: 'delete-aks',
            component: AzureCredentialComponent
          },
          {
            path: 'delete-gke',
            component: GcpCredentialComponent
          },
          {
            path: 'delete-eks',
            component: AwsCredentialComponent
          },
        ]
      },
    ]
  },
  { path:'**', redirectTo: '/login',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
