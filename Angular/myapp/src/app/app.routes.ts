import { Routes } from '@angular/router';
import { MyfiesComponent } from './myfies/myfies.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'myfies',component:MyfiesComponent},
    {path:'',component:LoginComponent},
];
