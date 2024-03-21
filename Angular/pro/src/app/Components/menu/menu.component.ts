import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private snackbar:MatSnackBar){}

  badgeDisplay = false;
  hideBadge(){
    this.badgeDisplay = true;
  }

  //notification
  snack(){
    let msg = "you have clicked the table";
    this.snackbar.open(msg,'ok',{
        verticalPosition:'top',
        horizontalPosition:'end'
    })
  }
}
