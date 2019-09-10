import { Routes, RouterModule } from "@angular/router";

// Components
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphicComponent } from "./graphic/graphic.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { title: "Progress" }
      },
      {
        path: "graphic",
        component: GraphicComponent,
        data: { title: "Grafici" }
      },
      {
        path: "account-settings",
        component: AccountSettingsComponent,
        data: { title: "Impostazioni Tema" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
