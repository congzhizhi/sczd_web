import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MangentComponent } from './components/mangent/mangent.component';
  import { PersonalComponent } from './components/mangent/personal/personal.component';
  import { DownloadComponent } from './components/mangent/download/download.component';
  import { DownshowComponent } from './components/mangent/downshow/downshow.component';
  import { DownupComponent } from './components/mangent/downup/downup.component';
  import { NewdownComponent } from './components/mangent/newdown/newdown.component';
  import { ModalmanagementComponent } from './components/mangent/modalmanagement/modalmanagement.component';
  import { ChangepasswordComponent } from './components/mangent/changepassword/changepassword.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {
    path:'mangent',component:MangentComponent,
    children:[
      {path:'personal',component:PersonalComponent,},
      {path:'load',component:DownloadComponent},
      {path:'show',component:DownshowComponent},
      {path:'up',component:DownupComponent},
      {path:'newdown',component:NewdownComponent},
      {path:'modal',component:ModalmanagementComponent},
      {path:'change',component:ChangepasswordComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


