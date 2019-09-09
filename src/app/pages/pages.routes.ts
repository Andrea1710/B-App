import {Routes, RouterModule} from '@angular/router';

// Components
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraphicComponent} from './graphic/graphic.component';

const pagesRoutes: Routes = [
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
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
