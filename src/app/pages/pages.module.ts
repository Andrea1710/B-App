import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from '../shared/shared.module';

// Routes
import {PAGES_ROUTES} from './pages.routes';

// Components
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraphicComponent} from './graphic/graphic.component';

@NgModule({
  imports: [SharedModule, PAGES_ROUTES],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
  ],
  providers: [],
})
export class PagesModule {}
