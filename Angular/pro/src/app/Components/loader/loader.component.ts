import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  isLoaded = true;

  //after 3 sec , off the loader
  constructor(){
    setTimeout(() => {
      this.isLoaded = false;
    }, 2000);
  }
}
