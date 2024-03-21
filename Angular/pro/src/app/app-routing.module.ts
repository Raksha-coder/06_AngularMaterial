import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { InputComponent } from './Components/input/input.component';
import { AutoCompleteComponent } from './Components/auto-complete/auto-complete.component';
import { CardComponent } from './Components/card/card.component';
import { SliderComponent } from './Components/slider/slider.component';
import { TableComponent } from './Components/table/table.component';
import { FormDesignComponent } from './Components/form-design/form-design.component';
import { AssociateComponent } from './Components/associate/associate.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'input',component:InputComponent},
  {path:'auto',component:AutoCompleteComponent},
  {path:'card',component:CardComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormDesignComponent},
  {path:'associate',component:AssociateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
