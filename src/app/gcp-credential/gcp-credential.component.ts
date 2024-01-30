import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gcp-credential',
  templateUrl: './gcp-credential.component.html',
  styleUrls: ['./gcp-credential.component.scss']
})
export class GcpCredentialComponent implements OnInit {
  createForm= new FormGroup({
    User_name: new FormControl('',[Validators.required]),
    jsonFile: new FormControl('',[Validators.required]),
  });
  showProgressBar: boolean = false;
  action: string = '';

  constructor(private router: Router,
    private service: RegisterService,
    private toast: ToastrService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.action = params['action'];    
        if(this.action === undefined){
          this.action = "Next"
        }
      });
     }

    selectedFile: File | null = null;

  ngOnInit(): void {
  }
  
  upload(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      this.readAndAppendFile(files[0]);
    }
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
  }

  readAndAppendFile(file: File): void {
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryData = this.arrayBufferToBase64(event.target?.result as ArrayBuffer);
      this.createForm.get('jsonFile')?.setValue(binaryData);
    };

    reader.readAsArrayBuffer(file);
  }

  onCancel(){
    this.router.navigate(["/home"]);
  }

  onNextGke(): void {
    this.showProgressBar = true;
    if(this.action === "Next" || this.action === "Add"){

    const jsonFile = this.createForm.get('jsonFile')?.value;

    if (jsonFile) {
      const jsonContent = atob(jsonFile);
      const textEncoder = new TextEncoder();
      const jsonDataUint8Array = textEncoder.encode(jsonContent);
      const formData = new FormData();
      formData.append('jsonFile', new Blob([jsonDataUint8Array], { type: 'application/octet-stream' }), 'data.bin');
      formData.append('User_name', this.Username.value);

      this.service.postGcpCluster(formData).subscribe(
        (res) => {
          this.showProgressBar = false;
          this.toast.success(res.message);
          this.createForm.reset();
          this.action === "Next" ? this.router.navigate(['/home/cloud-selection/gcp/gcp2']) : this.router.navigate(["/home"]);
        },
        (error) => {
          this.showProgressBar = false;
          this.toast.error(error.error.message);
        }
      );
    }
  }
  else if(this.action === "Update"){
    const jsonFile = this.createForm.get('jsonFile')?.value;

    if (jsonFile) {
      const jsonContent = atob(jsonFile);
      const textEncoder = new TextEncoder();
      const jsonDataUint8Array = textEncoder.encode(jsonContent);
      const formData = new FormData();
      formData.append('jsonFile', new Blob([jsonDataUint8Array], { type: 'application/octet-stream' }), 'data.bin');
      formData.append('User_name', this.Username.value);
    this.service.updateGcpCred(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }
  }
  else if(this.action === "Delete"){
    const jsonFile = this.createForm.get('jsonFile')?.value;

    if (jsonFile) {
      const jsonContent = atob(jsonFile);
      const textEncoder = new TextEncoder();
      const jsonDataUint8Array = textEncoder.encode(jsonContent);
      const formData = new FormData();
      formData.append('jsonFile', new Blob([jsonDataUint8Array], { type: 'application/octet-stream' }), 'data.bin');
      formData.append('User_name', this.Username.value);
    this.service.deleteGcpCred(this.createForm.value).subscribe((res)=>{
      this.showProgressBar = false;
      this.toast.success(res.message);
      this.createForm.reset();
      this.router.navigate(["/home"]);
    }, (error)=>{
      this.showProgressBar = false;
      this.toast.error(error.error.message)
    })
  }
  }
  }


  get Username():FormControl{
    return this.createForm.get("User_name") as FormControl;
  }

  get JsonFile():FormControl{
    return this.createForm.get("jsonFile") as FormControl;
  }
}
