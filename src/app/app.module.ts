import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Routes
import {APP_ROUTES} from './app.routes';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {GraphicComponent} from './pages/graphic/graphic.component';
import {HeaderComponent} from './shared/header/header.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumbsComponent} from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
