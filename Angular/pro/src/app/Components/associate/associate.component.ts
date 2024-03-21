import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent {

  constructor(private fb: FormBuilder,private service:HttpService) { }
  form!: FormGroup;
  associateList:any;
  countyList!:any;
  addressArray!:FormArray;
  filterOptions:any =[]; 


  ngOnInit() {
    this.form = this.fb.group({
      id: [''],  //this.fb.controls('')     ---- first input ke liye
      name: [''],  //this.fb.controls('')
      address: this.fb.array([]) // necessary
    });

    this.loadAssociate();
  }


  onSubmit() {
      console.log(this.form.value);
      
  }

  loadAssociate(){
      this.service.GetAssociate().subscribe(
        (res)=>{
          this.associateList = res.associate;
          this.countyList = res.country;    //get 
          console.log(this.associateList);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
  }


  addAddress(){

    const associate = this.form.value.id;//get the id

    //use user enter anyting in the field,id change hogi
    //and tab hi add address kro
    if(associate != ''){
            this.addressArray = this.form.get("address") as FormArray;  //empty array
            //add form to this array: address ke under mai
            this.addressArray.push(this.fb.group(
              {
                title:[''],
                country:[''],
                fullAddress:['']
              }
            ));
    }else{
        alert("please choose associate");
        
    }
  }


  //property getter
  //whole adddress with its field
  get getaddress(){
      return this.form.get("address") as FormArray;
  }



  //auto
  autochange(index:any){
    this.addressArray = this.form.get("address") as FormArray;  //empty array
    const addObj = this.addressArray.at(index) as FormGroup;  //country ko form mai convert kiya
    const _control = addObj.get("country") as FormControl;
    

    //we are using keyup , so no need to use pipe for valueChange,
    // the value will automatically get changed
   let filtervalue =  this._FILTER(_control.value || '');
   this.filterOptions = JSON.parse(JSON.stringify(filtervalue));
    
  }


//filter function
private _FILTER(value:string):object[]{
  const searchCountry = value.toLocaleLowerCase();
    return this.countyList.filter((opt:any) => opt.name.toLocaleLowerCase().includes(searchCountry)  || 
  opt.id.toLocaleLowerCase().includes(searchCountry));
}


}



