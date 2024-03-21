import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private api:HttpService,private dialog:MatDialog){}
  cars:any[]=[];
  Source:any;
  displayColumn:string[] = ['Id','NAME','CONTACT_DETAILS','PRICE','CATEGORIES','ACTION'];
  //pagination
  @ViewChild(MatPaginator)
  pagination !: MatPaginator;

  //sorting
  @ViewChild(MatSort)
  sort !: MatSort; 


  ngOnInit(){
     this.loadCar();
  }


  loadCar(){
    this.api.getCars().subscribe(
      (res)=>{
          this.cars = res;
          this.Source = new MatTableDataSource(this.cars);
          console.log(this.Source);
          
          //pagination
          this.Source.paginator = this.pagination;  //by default 
          //sorting
          this.Source.sort = this.sort;
  
      },
      (error)=>{
        console.log(error);
        
      }
      )
  }



// for searching any entry from table
  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.Source.filter = value;
  }

  edit(getid:any){
      this.Openpopup(getid,"Edit User");
  }




  addcars(){
    this.Openpopup(0,"Add Cars");
  }

  //dialog
  Openpopup(Id:any,title:any){
     var _popup =  this.dialog.open(PopupComponent,{
        width:'60%',
        height:'400px',
        enterAnimationDuration:'1000ms',
        exitAnimationDuration:'1000ms',
        data:{
          title:title,
          id:Id
        }
      });

      _popup.afterClosed().subscribe(items =>{
        console.log(items);
        this.loadCar();
        
      });
  }


 

}

