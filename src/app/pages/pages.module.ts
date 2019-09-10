import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

// Modules
import { SharedModule } from "../shared/shared.module";

// Routes
import { PAGES_ROUTES } from "./pages.routes";

// Components
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphicComponent } from "./graphic/graphic.component";
import { BoosterComponent } from "../components/booster/booster.component";
import { DoughnutGraphicComponent } from "./../components/doughnut-graphic/doughnut-graphic.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES,
    ChartsModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    BoosterComponent,
    DoughnutGraphicComponent
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    BoosterComponent,
    DoughnutGraphicComponent,
    AccountSettingsComponent
  ],
  providers: []
})
export class PagesModule {}
