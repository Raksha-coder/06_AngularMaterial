import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css']
})
export class FormDesignComponent {
    countryList = ['india','japan','china'];
    termList = ["15days","30days","45days","60days"];


    customForm!:FormGroup;
    constructor(private fb:FormBuilder){}

    ngOnInit(){
      this.customForm = this.fb.group(
        {
          name:['',Validators.required],
          email:['',Validators.required],
          PhoneNo:['',Validators.required],
          Country:['',Validators.required],
          address:['',Validators.required],
          Terms:['',Validators.required],
          birthDate:[new Date(2000,2,20)],
          gender:['male'],
          status:[true]
        }
      );

      this.customForm.setValue({name:'client',email:'example123@gmail.com',PhoneNo:'1234567890',
      Country:'india',address:'any',Terms:'15days',birthDate:new Date(2001,2,5),gender:'male',status:true});
    }

    SaveCustomer(){
        console.log(this.customForm.value);
    }


    clearEntry(){
        this.customForm.reset();
    }





   
   
}

