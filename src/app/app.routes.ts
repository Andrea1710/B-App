import {Routes, RouterModule} from '@angular/router';

// Components
import {PagesComponent} from './pages/pages.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';

// Child Routes
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {GraphicComponent} from './pages/graphic/graphic.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graphic', component: GraphicComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PagenotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
