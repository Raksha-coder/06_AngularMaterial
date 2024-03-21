import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private rf:MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private api:HttpService){}

  cloasedMsg = "band kar diya";
  inputdata:any;
  form!:FormGroup;
    editData:any;
  ngOnInit(){
    this.inputdata = this.data;
    if(this.inputdata.id != 0){
        this.setpopupdata(this.inputdata.id);
    }


    this.form = this.fb.group(
      { 
          name:[''],
          contactDetails:[''] ,
          price: [''],
          category:['']  
      }
    );
  }

  closepopup(){
    this.rf.close('Closed Using Function');
  }



  setpopupdata(id:any){
    this.api.getCarById(id).subscribe(
      (res)=>{
        this.editData = res.response;
        this.form.setValue({name:this.editData.name,contactDetails:this.editData.contactDetails,price:this.editData.price,category:this.editData.category});
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  saveuser(){
      console.log(this.form.value);
      let formdata={
        
          "name": this.form.value.name,
          "contactDetails": this.form.value.contactDetails,
          "price": this.form.value.price,
          "category": this.form.value.category
        
      }
      this.api.postCar(formdata).subscribe(
        (res)=>{
          console.log(res);
          this.closepopup();
          
          
        },
        (error)=>{
          console.log(error);
          
        }
      )

      
  }
  
}
