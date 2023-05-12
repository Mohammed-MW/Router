import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './menu/user/user.component';
import { SignupComponent } from './menu/signup/signup.component';


const ROUTES: Routes = [

    { path: 'menu', component: MenuComponent },
    { path: 'user', component: UserComponent },
    { path: 'signup', component: SignupComponent },


];


export { ROUTES };