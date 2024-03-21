import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  colors:any[] = ['red','green','yellow'];
  filterOptions!:Observable<string[]>; 
  formcontrol = new FormControl('');   //to get form input value


  //we can perform chaining operations like map filter using pipe
  // pipe is usually use with observable
  ngOnInit(){
    this.filterOptions = this.formcontrol.valueChanges.pipe(
      startWith(''),map(value => this._FILTER(value||''))  //send one value or empty value to filter function
    )

    console.log(this.filterOptions);
    
  }


  private _FILTER(value:string):string[]{
      const searchColor = value.toLocaleLowerCase();
      return this.colors.filter(option => option.toLocaleLowerCase().includes(searchColor));  //include(r) or include(re) or include('')
  }



 
}
