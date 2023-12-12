// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:{
    baseUrl:"http://3.19.185.178:4000/",
    
    routes:{
      registerUser:{endpoint:'jsonRegister', method:'POST'},
      loginUser: {endpoint:'JsonLogin', method:'POST'},
      postAzureCluster: {endpoint:'json_submit_form_azure', method:'POST'},
      postAksCluster: {endpoint:'json_create_aks', method:'POST'},
      postAwsCluster: {endpoint:'json_submit_form_aws', method:'POST'},
      postEksCluster: {endpoint:'json_create_aws', method:'POST'},
      postDeleteEksCluster: {endpoint:'json_delete_eks', method:'POST'},
      postGcpCluster: {endpoint:'json_submit_form_gke', method:'POST'},
      postGkeCluster: {endpoint:'json_create_gke', method:'POST'},
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
