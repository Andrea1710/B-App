import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SidebarService {
  menu: any = [
    {
      title: "Principale",
      icon: "mdi mdi-gauge",
      submenu: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "ProgressBar", url: "/progress" },
        { title: "Grafici", url: "/graphic" }
      ]
    }
  ];

  constructor() {}
}
